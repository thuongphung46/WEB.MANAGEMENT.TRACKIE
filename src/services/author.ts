import { IAuthor } from "@/interfaces/author";
import { Request } from "./request";

const Controller = "authors"; //tác giả
export const GenresService = {
  GetById: async (id: string) => {
    return await Request(Controller).getAsync(`${id}`);
  },
  Create: async (data: IAuthor) => {
    return await Request(Controller).postAsync("", data);
  },
  Update: async (id: string, data: IAuthor) => {
    return await Request(Controller).patchAsync(`${id}`, data);
  },
  Delete: async (id: string) => {
    return await Request(Controller).deleteAsync(`${id}`);
  },
};
