import axios from "axios";
import { Category } from "../interfaces/category";
const allDataUri = "/data";

export interface Root extends Category {
  data: Category[];
}

export const getAll = async (): Promise<Root> => {
  const request: Root = await axios.get(allDataUri);
  return request;
};

export default { getAll };
