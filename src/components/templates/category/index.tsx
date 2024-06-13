import { FC } from "react";
import { CategoryTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListCategory } from "@/components/molecules/category_grid/grid";

export const CategoryTemplate: FC<CategoryTemplateProps> = ({
  action,
  data,
}) => {
  return (
    <Box>
      <ListCategory dataSource={data}></ListCategory>
    </Box>
  );
};
