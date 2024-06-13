import { useGetListCharacter } from "@/hook/useGetListCharacter";
import { ICharacter } from "@/interfaces/character";
import { CharactorTemplate } from "@/components/templates/character";
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
