import { useGetListAuthor } from "@/hook/useGetListAuthor";
import { IAuthor } from "@/interfaces/author";
import { AuthorTemplate } from "@components/templates/author";
import { useEffect, useState } from "react";

export const AuthorPage = () => {
  const [listDataAuthor, setListDataAuthor] = useState<IAuthor[]>([]);
  const { data: resListAuthor } = useGetListAuthor();

  useEffect(() => {
    if (resListAuthor) {
      setListDataAuthor(resListAuthor);
    }
  }, [resListAuthor]);

  return (
    <div>
      <AuthorTemplate data={listDataAuthor} />
    </div>
  );
};
