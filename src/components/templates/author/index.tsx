import { FC } from "react";
import { AuthorTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListAuthor } from "@/components/molecules/author_grid/grid";

export const AuthorTemplate: FC<AuthorTemplateProps> = ({ action, data }) => {
  return (
    <Box>
      <ListAuthor dataSource={data} />
    </Box>
  );
};
