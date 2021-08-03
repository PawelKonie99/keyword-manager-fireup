import axios from "axios";
const newCategoryUri = "/addcategory";

//todo make interface
export const postNewCategory = async (newCategory: string) => {
  const request = await axios.post(newCategoryUri, { newCategory });
  return request.data;
};
