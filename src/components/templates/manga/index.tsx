import { FC } from "react";
import { ManganTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListManga } from "@/components/molecules/mangan/grid";

export const ManganTemplate: FC<ManganTemplateProps> = ({ action, data }) => {
  return (
    <Box>
      <ListManga dataSource={data}></ListManga>
    </Box>
  );
};
