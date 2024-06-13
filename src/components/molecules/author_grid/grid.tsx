import { FC, useCallback } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
// import { columns } from "@/components/molecules/author_grid/columns";
import LinearProgress from "@mui/material/LinearProgress";
import { IAuthor } from "@/interfaces/author";
import { GridColDef } from "@mui/x-data-grid";
import Avatar from '@mui/material/Avatar';
import { AuthorService } from "@/services/author";

interface Props {
  dataSource: IAuthor[];
}

export const ListAuthor: FC<Props> = ({ dataSource }) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "list_author.table.name",
      editable: true,
      width: 200,
      type: "string",
    },
    {
      field: "birthday",
      headerName: "list_author.table.birthday",
      editable: true,
      width: 150,
      type: "date",
      valueFormatter: (params) => {
        return new Date(params.value as string).toLocaleDateString("vi-VN");
      },
    },
    {
      field: "place",
      headerName: "list_author.table.place",
      editable: true,
      width: 150,
      type: "string",
    },
    {
      field: "bio",
      headerName: "list_author.table.bio",
      width: 200,
      type: "string",
      editable: true,
    },
    {
      field: "image",
      headerName: "list_author.table.image",
      width: 200,
      type: "string",
      editable: true,
      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.value as string} />;
      }

    }
  ];
  const handlDelete = useCallback((id: string) => {
    AuthorService.Delete(id)
  }, []);

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
        slots={{
          loadingOverlay: LinearProgress,
        }}
        loading={dataSource.length === 0 ? true : false}
      />
    </Box>
  );
};
