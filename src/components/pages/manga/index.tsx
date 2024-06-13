import { useGetListManga } from "@/hook/useGetListManga";
import { IPosts } from "@/interfaces/mangan";
import { ManganTemplate } from "@components/templates/manga";
import { useEffect, useState } from "react";

export const ManganPage = () => {
  const [listDataManga, setListDataManga] = useState<IPosts[]>([]);
  const { data: resListAuthor } = useGetListManga();

  useEffect(() => {
    if (resListAuthor) {
      setListDataManga(resListAuthor);
    }
  }, [resListAuthor]);
  return (
    <div>
      <ManganTemplate data={listDataManga} />
    </div>
  );
};
