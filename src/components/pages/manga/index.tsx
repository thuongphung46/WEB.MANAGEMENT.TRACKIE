import { useGetListManga } from "@/hook/useGetListManga";
import { IPosts } from "@/interfaces/mangan";
import { ManganTemplate } from "@components/templates/manga";
import { useCallback, useEffect, useMemo, useState } from "react";
import { columns } from "@/components/pages/manga/columns";
import { ICharacter } from "@/interfaces/character";
import { useGetListCharacter } from "@/hook/useGetListCharacter";
import { IGenres } from "@/interfaces/genres";
import { useGetListCategory } from "@/hook/useGetListCategory";
import { IAuthor } from "@/interfaces/author";
import { useGetListAuthor } from "@/hook/useGetListAuthor";



export const ManganPage = () => {
  const [listDataManga, setListDataManga] = useState<IPosts[]>([]);
  const [ListCategory, setListCategory] = useState<IGenres[]>([]);
  const [ListCharacter, setListCharacter] = useState<ICharacter[]>([]);
  const [listDataAuthor, setListDataAuthor] = useState<IAuthor[]>([]);
  const { data: resListAuthor } = useGetListAuthor();
  const { data: resListCharacter } = useGetListCharacter();
  const { data: resListCategory } = useGetListCategory();
  const { data: resListMangan } = useGetListManga();
  useEffect(() => {
    if (resListAuthor) {
      setListDataManga(resListAuthor);
    }
  }, [resListAuthor]);
  const handleSetState = useCallback((data: any) => {
    setListDataManga(data);
  }, []);

  const renderColumns = useMemo(() => {

    return columns;

  }, []);
  return (
    <div>
      <ManganTemplate columns={renderColumns} dataSource={listDataManga} setState={handleSetState} />
    </div>
  );
};
