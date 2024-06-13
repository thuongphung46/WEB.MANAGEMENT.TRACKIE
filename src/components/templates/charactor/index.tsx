import { FC } from "react";
import { CharactorTemplateProps } from "./index.interface";
import Box from "@mui/material/Box";
import { ListCharacter } from "@/components/molecules/charactor_grid/grid";

export const CharactorTemplate: FC<CharactorTemplateProps> = ({
  action,
  data,
}) => {
  return (
    <Box>
      <ListCharacter dataSource={data}></ListCharacter>
    </Box>
  );
};
