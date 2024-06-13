import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
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
    valueFormatter(params) {
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
  },
];
