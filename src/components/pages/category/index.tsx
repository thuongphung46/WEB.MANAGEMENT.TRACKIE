import { useGetListCategory } from "@/hook/useGetListCategory";
import { IGenres } from "@/interfaces/genres";
import { CategoryTemplate } from "@components/templates/category";
import { useEffect, useState } from "react";

export const CategoryPage = () => {
  const [ListCategory, setListCategory] = useState<IGenres[]>([]);
  const { data: resListCategory } = useGetListCategory();

  useEffect(() => {
    if (resListCategory) {
      setListCategory(resListCategory);
    }
  }, [resListCategory]);
  return (
    <div>
      <CategoryTemplate data={ListCategory} />
    </div>
  );
};
