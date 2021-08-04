import axios from "axios";
import { Category } from "../interfaces/categoryInterfaces";

const allDataUri = "/data";

export interface Root {
  data: Category[];
}

export const getAll = async (): Promise<Root> => {
  return await axios.get(allDataUri);
};
