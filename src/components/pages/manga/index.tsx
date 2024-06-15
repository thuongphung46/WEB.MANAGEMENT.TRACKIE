import { useGetListManga } from "@/hook/useGetListManga";
import { IPosts } from "@/interfaces/mangan";
import { ManganTemplate } from "@components/templates/manga";
import { useCallback, useEffect, useState } from "react";

export const ManganPage = () => {
  const [listDataManga, setListDataManga] = useState<IPosts[]>([]);
  const { data: resListAuthor } = useGetListManga();

  useEffect(() => {
    if (resListAuthor) {
      setListDataManga(resListAuthor);
    }
  }, [resListAuthor]);
  const handleSetState = useCallback((data: any) => {
    setListDataManga(data);
  }, []);
  return (
    <div>
      <ManganTemplate dataSource={listDataManga} setState={handleSetState} />
    </div>
  );
};
