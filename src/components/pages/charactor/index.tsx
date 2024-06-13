import { useGetListCharacter } from "@/hook/useGetListCharacter";
import { ICharacter } from "@/interfaces/charactor";
import { CharactorTemplate } from "@components/templates/charactor";
import { useEffect, useState } from "react";

export const CharactorPage = () => {
  const [ListCategory, setListCategory] = useState<ICharacter[]>([]);
  const { data: resListCategory } = useGetListCharacter();

  useEffect(() => {
    console.log(resListCategory);
    if (resListCategory) {

      setListCategory(resListCategory);

    }
  }, [resListCategory]);
  return (
    <div>
      <CharactorTemplate data={ListCategory} />
    </div>
  );
};
