import { useGetListManga } from "@/hook/useGetListManga";
import { IPosts } from "@/interfaces/mangan";
import { ManganTemplate } from "@components/templates/manga";
import { useCallback, useEffect, useMemo, useState } from "react";
import { columns } from "@/components/pages/manga/columns";
import { ICharacter } from "@/interfaces/character";
import { useGetListCharacter } from "@/hook/useGetListCharacter";
import { IGenres } from "@/interfaces/genres";
import { useGetListCategory } from "@/hook/useGetListCategory";
import { IAuthor } from "@/interfaces/author";
import { useGetListAuthor } from "@/hook/useGetListAuthor";
import { GridColDef } from "@mui/x-data-grid/models";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";



export const ManganPage = () => {
  const [listDataManga, setListDataManga] = useState<IPosts[]>([]);
  const [listCategory, setListCategory] = useState<IGenres[]>([]);
  const [listCharacter, setListCharacter] = useState<ICharacter[]>([]);
  const [listDataAuthor, setListDataAuthor] = useState<IAuthor[]>([]);
  const { data: resListAuthor } = useGetListAuthor();
  const { data: resListCharacter } = useGetListCharacter();
  const { data: resListCategory } = useGetListCategory();
  const { data: resListMangan } = useGetListManga();
  useEffect(() => {
    if (resListAuthor) {
      setListDataAuthor(resListAuthor);
    }
  }, [resListAuthor]);

  useEffect(() => {
    if (resListCharacter) {
      setListCharacter(resListCharacter);
    }
  }, [resListCharacter]);
  useEffect(() => {
    if (resListCategory) {
      setListCategory(resListCategory);
    }
  }, [resListCategory]);
  useEffect(() => {
    if (resListMangan) {
      setListDataManga(resListMangan);
    }
  }, [resListMangan]);
  const handleSetState = useCallback((data: any) => {
    setListDataManga(data);
  }, []);

  const renderColumns = useMemo(() => {
    const convertColumns: GridColDef[] = [
      ...columns,
      {
        field: "image",
        headerName: "list_manga.table.image",
        editable: true,
        width: 150,
        type: "String",
        renderCell: (params) => {
          return <Avatar src={params.value as string} />;
        }
      },
      // {
      //   field: "genreIds",
      //   headerName: "list_manga.table.genreIds",
      //   editable: true,
      //   width: 300,
      //   renderCell: (params) => {
      //     console.log("params: ", params);
      //     return (
      //       <Autocomplete
      //         multiple
      //         id="tags-standard"
      //         sx={{
      //           width: "100%",
      //           height: "100%",
      //         }}
      //         freeSolo
      //         options={listCategory}
      //         getOptionKey={(option) => option.id ? option.id.toString() : ""}
      //         getOptionLabel={(option) => option.name || ""}
      //         // inputValue={params.value}
      //         // defaultValue={[]}
      //         value={params.row}
      //         renderInput={(params) => (
      //           <TextField
      //             {...params}
      //             variant="filled"
      //             placeholder="Category"
      //           />
      //         )}
      //       />
      //     )
      //   },
      //   renderEditCell: (params) => {
      //     console.log("params edit: ", params);
      //     return (
      //       <Autocomplete
      //         multiple
      //         id="tags-standard"
      //         sx={{
      //           width: "100%",
      //           height: "100%",
      //         }}
      //         freeSolo
      //         options={listCategory}
      //         readOnly={true}
      //         getOptionKey={(option) => option.id && option.id.toString()}
      //         getOptionLabel={(option) => option.name || ""}
      //         // inputValue={params.value}
      //         // defaultValue={[]}

      //         value={params.value}
      //         renderInput={(params) => (
      //           <TextField
      //             {...params}
      //             variant="filled"
      //             placeholder="Category"
      //           />
      //         )}
      //       />
      //     )
      //   },
      // },
      // {
      //   field: "authorIds",
      //   headerName: "list_manga.table.authorIds",
      //   editable: true,
      //   width: 150,
      //   // type: "singleSelect",
      //   // getOptionValue: (value: any) => value.code,
      //   // getOptionLabel: (value: any) => value.name,
      // },
      // {
      //   field: "characterIds",
      //   headerName: "list_manga.table.characterIds",
      //   editable: true,
      //   width: 150,
      //   // type: "singleSelect",
      //   // getOptionValue: (value: any) => value.code,
      //   // getOptionLabel: (value: any) => value.name,
      // },
      // {
      //   //
      // }
    ]
    return convertColumns;

  }, []);
  return (
    <div>
      <ManganTemplate columns={renderColumns} dataSource={listDataManga} setState={handleSetState} />
    </div>
  );
};
