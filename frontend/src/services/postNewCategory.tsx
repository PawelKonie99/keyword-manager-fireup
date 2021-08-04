import axios from "axios";
import { Category } from "../interfaces/categoryInterfaces";
const newCategoryUri = "/addcategory";

export const postNewCategory = async (categoryName: string): Promise<Category> => {
  const { data } = await axios.post(newCategoryUri, { categoryName: categoryName });
  return data;
};
