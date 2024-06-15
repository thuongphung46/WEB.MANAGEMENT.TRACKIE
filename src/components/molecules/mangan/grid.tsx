import { FC, useCallback } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
import LinearProgress from "@mui/material/LinearProgress";
import { IPosts } from "@/interfaces/mangan";
import { PostsService } from "@/services/mangan";
import { MESSAGE_CODE } from "@/interfaces/enum";
import { toastMessage } from "@/components/atoms/toast_message";
import { t } from "i18next";
import { GridColDef } from "@mui/x-data-grid";

export interface Props {
  dataSource: IPosts[];
  setState: (data: any) => void;
  columns: GridColDef[]

}

export const ListManga: FC<Props> = ({ dataSource, setState, columns }) => {
  const handlDelete = useCallback(async (id: string) => {
    const result = await PostsService.Delete(id)
    if (result.msg_code === MESSAGE_CODE.SUCCESS) {
      setState(dataSource.filter((item) => item.id?.toString() !== id));
      toastMessage(t("toast_message.delete_success"), "success");
    } else {
      toastMessage(t("toast_message.delete_fail"), "error");
    }
  }, [dataSource, setState]);
  const handleAddNewAndUpdate = useCallback(async (data: any) => {
    const params: IPosts = {
      name: data.name,
      image: data.image,
      description: data.description,
      synopsis: data.synopsis,
      //chưa xử lý
      authorIds: data.authorIds,
      characterIds: data.characterIds,
      genreIds: data.genreIds,
    }
    if (data?.isNew) {
      const result = await PostsService.Create(params);
      if (result.msg_code === MESSAGE_CODE.SUCCESS) {
        setState([...dataSource, result.content]);
        toastMessage(t("toast_message.add_success"), "success");
      } else {
        toastMessage(t("toast_message.add_fail"), "error");
      }
    } else {
      const result = await PostsService.Update(data.id, params)
      if (result.msg_code === MESSAGE_CODE.SUCCESS) {
        const index = dataSource.findIndex((item) => item.id === data.id);
        dataSource[index] = result.content;
        setState([...dataSource]);
        toastMessage(t("toast_message.update_success"), "success");
      } else {
        toastMessage(t("toast_message.update_fail"), "error");
      }
    }
  }, [dataSource, setState]);
  return (
    <Box>
      <BaseGrid
        sx={{
          height: "calc(100vh - 90px)",
          width: "100%",
        }}
        columns={columns}
        rows={dataSource}
        onDel={handlDelete}
        onSave={handleAddNewAndUpdate}
        slots={{
          loadingOverlay: LinearProgress,
        }}
        loading={dataSource.length === 0 ? true : false}
      />
    </Box>
  );
};
