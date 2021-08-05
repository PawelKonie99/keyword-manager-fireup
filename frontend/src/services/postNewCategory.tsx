import axios from "axios";
import { Category } from "../interfaces/categoryInterfaces";
import { Ierror } from "../interfaces/loggerInterfaces";
const newCategoryUri = "/addcategory";

export const postNewCategory = async (categoryName: string): Promise<Category | undefined> => {
  const { data } = await axios.post(newCategoryUri, { categoryName: categoryName });
  const isError = data as Ierror
  
  if(isError.error) {
    return undefined;
  }

  return data;
};
