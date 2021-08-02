import axios from "axios";
const newCategoryUri = "/delete/";

//todo make interface
export const deleteCategory = async (categoryId: string) => {
  const request = await axios.delete(`${newCategoryUri}${categoryId}`);
  return request.data;
};
