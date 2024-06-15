import { FC } from "react";
import { CategoryTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListCategory } from "@/components/molecules/category_grid/grid";

export const CategoryTemplate: FC<CategoryTemplateProps> = ({
  action,
  dataSource,
  setState
}) => {
  return (
    <Box>
      <ListCategory dataSource={dataSource} setState={setState} ></ListCategory>
    </Box>
  );
};
