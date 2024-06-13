import { IFormState } from "@/interfaces/action";
import { IPosts } from "@/interfaces/mangan";

export interface ManganTemplateProps extends IFormState {
  data: IPosts[];
}
