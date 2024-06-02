import React, { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import { ListManga } from "@components/molecules/home/list_manga";
import { DataManga } from "@data/mockup";

export const HomeTemplate: FC = () => {
  const [dataSource, setDataSource] = React.useState<any[]>([]);

  useEffect(() => {
    setDataSource(DataManga);
  }, []);

  return (
    <Box>
      <ListManga dataSource={dataSource} />
    </Box>
  );
};
