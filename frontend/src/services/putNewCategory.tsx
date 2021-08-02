import axios from "axios";
const newCategoryUri = "/addcategory";

//todo make interface
export const putNewCategory = async (newCategory: string) => {
  const request = await axios.put(newCategoryUri, { newCategory });
  return request.data;
};
