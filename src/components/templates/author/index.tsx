import { FC } from "react";
import { AuthorTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListAuthor } from "@/components/molecules/author_grid/grid";

export const AuthorTemplate: FC<AuthorTemplateProps> = ({ action, dataSource, setState }) => {
  return (
    <Box>
      <ListAuthor dataSource={dataSource} setState={setState} />
    </Box>
  );
};
