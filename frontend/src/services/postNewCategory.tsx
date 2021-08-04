import axios from "axios";
const newCategoryUri = "/addcategory";

//todo make interface
export const postNewCategory = async (categoryName: string) => {
  const request = await axios.post(newCategoryUri, { categoryName: categoryName });
  return request.data;
};
