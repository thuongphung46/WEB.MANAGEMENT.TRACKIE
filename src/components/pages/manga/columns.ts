import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "list_manga.table.name",
    editable: true,
    width: 150,
    type: "String",
  },
  {
    field: "description",
    headerName: "list_manga.table.description",
    editable: true,
    width: 150,
    type: "String",
  },
  {
    field: "synopsis",
    headerName: "list_manga.table.synopsis",
    editable: true,
    width: 150,
    type: "String",
  },
  {
    field: "image",
    headerName: "list_manga.table.image",
    editable: true,
    width: 150,
    type: "String",
  },
  {
    field: "genreIds",
    headerName: "list_manga.table.genreIds",
    editable: true,
    width: 150,
    type: "String",
  },
  {
    field: "authorIds",
    headerName: "list_manga.table.authorIds",
    editable: true,
    width: 150,
    type: "String",
  },
  {
    field: "characterIds",
    headerName: "list_manga.table.characterIds",
    editable: true,
    width: 150,
    type: "String",
  },
];
