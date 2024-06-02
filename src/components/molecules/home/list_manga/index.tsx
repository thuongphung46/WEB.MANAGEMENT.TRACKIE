import { FC } from "react";
import Box from "@mui/material/Box";
import { BaseGrid } from "@components/atoms/datagrid";
import { columns } from "@components/molecules/home/list_manga/columns";

interface Props {
  dataSource: any[];
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
      />
    </Box>
  );
};
