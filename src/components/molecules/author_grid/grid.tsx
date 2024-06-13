import { FC } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
import { columns } from "@/components/molecules/author_grid/columns";
import LinearProgress from "@mui/material/LinearProgress";
import { IAuthor } from "@/interfaces/author";

interface Props {
  dataSource: IAuthor[];
}

export const ListAuthor: FC<Props> = ({ dataSource }) => {
  return (
    <Box>
      <BaseGrid
        sx={{
          height: "calc(100vh - 90px)",
          width: "100%",
        }}
        columns={columns}
        rows={dataSource}
        slots={{
          loadingOverlay: LinearProgress,
        }}
        // loading={dataSource.length === 0 ? true : false}
      />
    </Box>
  );
};