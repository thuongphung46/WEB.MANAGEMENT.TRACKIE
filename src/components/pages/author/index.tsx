import { useGetListAuthor } from "@/hook/useGetListAuthor";
import { IAuthor } from "@/interfaces/author";
import { AuthorTemplate } from "@components/templates/author";
import { useCallback, useEffect, useState } from "react";

export const AuthorPage = () => {
  const [listDataAuthor, setListDataAuthor] = useState<IAuthor[]>([]);
  const { data: resListAuthor } = useGetListAuthor();

  useEffect(() => {
    if (resListAuthor) {
      setListDataAuthor(resListAuthor);
    }
  }, [resListAuthor]);
  const handleSetState = useCallback((data: any) => {
    setListDataAuthor(data);
  }, []);


  return (
    <div>
      <AuthorTemplate dataSource={listDataAuthor} setState={handleSetState} />
    </div>
  );
};
