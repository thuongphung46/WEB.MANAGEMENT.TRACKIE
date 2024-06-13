import { IFormState } from "@/interfaces/action";
import { IAuthor } from "@/interfaces/author";

export interface AuthorTemplateProps extends IFormState {
  data: IAuthor[];
}
