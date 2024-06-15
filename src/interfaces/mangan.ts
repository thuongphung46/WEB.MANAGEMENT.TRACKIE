export interface IPosts {
  id?: number;
  name?: string;
  description?: string;
  synopsis?: string;
  image?: string;
  genreIds?: number[];
  authorIds?: number[];
  characterIds?: number[];
}
