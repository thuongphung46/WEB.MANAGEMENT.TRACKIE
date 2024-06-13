import { FC } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
import { columns } from "@/components/molecules/charactor_grid/columns";
import LinearProgress from "@mui/material/LinearProgress";
import { ICharactor } from "@/interfaces/charactor";

interface Props {
  dataSource: ICharactor[];
}

export const ListCharacter: FC<Props> = ({ dataSource }) => {
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
