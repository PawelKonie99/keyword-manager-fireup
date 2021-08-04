import axios from "axios";
const newCategoryUri = "/deletecategory/";

export const deleteCategory = async (categoryId: string): Promise<string> => {
  const { data } = await axios.delete(`${newCategoryUri}${categoryId}`);
  return data.toString();
};
