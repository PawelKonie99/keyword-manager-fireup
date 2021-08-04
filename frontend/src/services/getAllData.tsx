import axios from "axios";
import { Idata } from "../interfaces/categoryInterfaces";

const allDataUri = "/data";

export const getAll = async (): Promise<Idata> => {
  return await axios.get(allDataUri);
};
