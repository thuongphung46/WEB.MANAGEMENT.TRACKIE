import { FC } from "react";
import { ManganTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListManga } from "@/components/molecules/mangan/grid";

export const ManganTemplate: FC<ManganTemplateProps> = ({ action, dataSource, setState }) => {
  return (
    <Box>
      <ListManga dataSource={dataSource} setState={setState}></ListManga>
    </Box>
  );
};
