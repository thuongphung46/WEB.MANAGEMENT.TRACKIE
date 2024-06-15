import { useGetListCategory } from "@/hook/useGetListCategory";
import { IGenres } from "@/interfaces/genres";
import { CategoryTemplate } from "@components/templates/category";
import { useCallback, useEffect, useState } from "react";

export const CategoryPage = () => {
  const [ListCategory, setListCategory] = useState<IGenres[]>([]);
  const { data: resListCategory } = useGetListCategory();

  useEffect(() => {
    if (resListCategory) {
      setListCategory(resListCategory);
    }
  }, [resListCategory]);
  const handleSetState = useCallback((data: any) => {
    setListCategory(data);
  }, []);
  return (
    <div>
      <CategoryTemplate dataSource={ListCategory} setState={handleSetState} />
    </div>
  );
};
