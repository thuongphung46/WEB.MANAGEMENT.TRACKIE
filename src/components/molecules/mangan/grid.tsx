import { FC } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
import { columns } from "@/components/molecules/mangan/columns";
import LinearProgress from "@mui/material/LinearProgress";
import { IPosts } from "@/interfaces/mangan";

interface Props {
  dataSource: IPosts[];
}

export const ListManga: FC<Props> = ({ dataSource }) => {
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
