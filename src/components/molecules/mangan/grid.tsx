import { FC, useCallback, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
import LinearProgress from "@mui/material/LinearProgress";
import { IPosts } from "@/interfaces/mangan";
import { PostsService } from "@/services/mangan";
import { MESSAGE_CODE } from "@/interfaces/enum";
import { toastMessage } from "@/components/atoms/toast_message";
import { t } from "i18next";
import { GridColDef } from "@mui/x-data-grid";
import { PopupModal } from "@/components/atoms/popup";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormField, { IFormField } from "@/components/atoms/form_value";
import { useDebouncedCallback } from "use-debounce";
import { IAuthor } from "@/interfaces/author";
import { ICharacter } from "@/interfaces/character";
import { IGenres } from "@/interfaces/genres";
import { useGetListCategory } from "@/hook/useGetListCategory";
import { useGetListAuthor } from "@/hook/useGetListAuthor";
import { useGetListCharacter } from "@/hook/useGetListCharacter";

export interface Props {
  dataSource: IPosts[];
  setState: (data: any) => void;
  columns: GridColDef[];
  listAuthor: IAuthor[];
  listCharacter: ICharacter[];
  listGenre: IGenres[];
}

export const ListManga: FC<Props> = ({ dataSource, setState, columns }) => {
  const [open, setOpen] = useState(false);
  const [dataItem, setDataItem] = useState<IPosts>({});
  const { data: resListAuthor } = useGetListAuthor();
  const { data: resListCategory } = useGetListCategory();
  const { data: resListCharacter } = useGetListCharacter();
  const handlDelete = useCallback(
    async (id: string) => {
      const result = await PostsService.Delete(id);
      if (result.msg_code === MESSAGE_CODE.SUCCESS) {
        setState(dataSource.filter((item) => item.id?.toString() !== id));
        toastMessage(t("toast_message.delete_success"), "success");
      } else {
        toastMessage(t("toast_message.delete_fail"), "error");
      }
    },
    [dataSource, setState]
  );
  const handleAddNewAndUpdate = useCallback(
    async (data: any) => {
      const params: IPosts = {
        name: data.name,
        image: data.image,
        description: data.description,
        synopsis: data.synopsis,
        authorIds: data.authorIds,
        characterIds: data.characterIds,
        genreIds: data.genreIds,
      };
      if (data?.isNew) {
        const result = await PostsService.Create(params);
        if (result.msg_code === MESSAGE_CODE.SUCCESS) {
          setState([...dataSource, result.content]);
          toastMessage(t("toast_message.add_success"), "success");
        } else {
          toastMessage(t("toast_message.add_fail"), "error");
        }
      } else {
        const result = await PostsService.Update(data.id, params);
        if (result.msg_code === MESSAGE_CODE.SUCCESS) {
          const index = dataSource.findIndex((item) => item.id === data.id);
          dataSource[index] = result.content;
          setState([...dataSource]);
          toastMessage(t("toast_message.update_success"), "success");
        } else {
          toastMessage(t("toast_message.update_fail"), "error");
        }
      }
    },
    [dataSource, setState]
  );
  const handleShowDetail = useCallback((data: any) => {
    setDataItem({
      authorIds: data.authorIds,
      characterIds: data.characterIds,
      genreIds: data.genreIds,
    });
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setDataItem({});
  }, []);

  const Fields: IFormField[] = useMemo(() => {
    return [
      {
        id: "authorIds",
        label: "list_manga.table.authorIds",
        type: "selectMutiple",
        isRequire: false,
        options:
          resListAuthor?.map((i) => {
            return {
              value: i.id,
              label: i.name,
            };
          }) || [],
      },
      {
        id: "characterIds",
        label: "list_manga.table.characterIds",
        type: "selectMutiple",
        isRequire: false,
        options:
          resListCharacter?.map((i) => {
            return {
              value: i.id,
              label: i.name,
            };
          }) || [],
      },
      {
        id: "genreIds",
        label: "list_manga.table.genreIds",
        type: "selectMutiple",
        isRequire: false,
        options:
          resListCategory?.map((i) => {
            return {
              value: i.id,
              label: i.name,
            };
          }) || [],
      },
    ];
  }, [resListAuthor, resListCategory, resListCharacter]);

  const hanldeOnChangefield = useDebouncedCallback((e: any) => {
    const { name: field, value } = e.target;

    // setFormData(prevFormData => ({ ...prevFormData, [field]: value }));
  }, 500);

  const renderPopup = useMemo(() => {
    return (
      <PopupModal handleClose={handleClose} handleSave={() => {}} open={open}>
        {dataItem && (
          <>
            <Grid container spacing={2}>
              {Fields.length > 0 && (
                <FormField
                  action={"EDIT"}
                  fields={Fields}
                  formData={dataItem}
                  handleOnChangeField={hanldeOnChangefield}
                />
              )}
            </Grid>
          </>
        )}
      </PopupModal>
    );
  }, [Fields, dataItem, handleClose, hanldeOnChangefield, open]);
  return (
    <Box>
      <BaseGrid
        sx={{
          height: "calc(100vh - 90px)",
          width: "100%",
        }}
        addActionsDetail={true}
        columns={columns}
        rows={dataSource}
        onDel={handlDelete}
        onSave={handleAddNewAndUpdate}
        onClickDetail={handleShowDetail}
        slots={{
          loadingOverlay: LinearProgress,
        }}
        loading={dataSource.length === 0 ? true : false}
      />
      {renderPopup}
    </Box>
  );
};
