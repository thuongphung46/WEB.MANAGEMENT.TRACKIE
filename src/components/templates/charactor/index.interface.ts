import { IFormState } from "@/interfaces/action";
import { ICharactor } from "@/interfaces/charactor";

export interface CharactorTemplateProps extends IFormState {
  data: ICharactor[];
}
