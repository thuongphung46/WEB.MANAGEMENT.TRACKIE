import { IFormState } from "@/interfaces/action";
import { ICharacter } from "@/interfaces/character";

export interface CharactorTemplateProps extends IFormState {
  data: ICharacter[];
}
