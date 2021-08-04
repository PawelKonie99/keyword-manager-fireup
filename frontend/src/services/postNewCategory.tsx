import axios from "axios";
import { Category } from "../interfaces/category";
const newCategoryUri = "/addcategory";

//todo make interface for logger
export const postNewCategory = async (categoryName: string): Promise<Category> => {
  const { data } = await axios.post(newCategoryUri, { categoryName: categoryName });
  return data;
};
