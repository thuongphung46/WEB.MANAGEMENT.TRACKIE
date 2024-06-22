import { IAuthor } from "./author";
import { ICharacter } from "./character";
import { IGenres } from "./genres";

export interface IPosts {
  id?: any;
  name?: string;
  description?: string;
  synopsis?: string;
  image?: string;
  genreIds?: IGenres[];
  authorIds?: IAuthor[];
  characterIds?: ICharacter[];
}
