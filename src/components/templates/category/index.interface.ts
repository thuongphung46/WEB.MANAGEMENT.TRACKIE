import { IFormState } from "@/interfaces/action";
import { IGenres } from "@/interfaces/genres";

export interface CategoryTemplateProps extends IFormState {
  data: IGenres[];
}
