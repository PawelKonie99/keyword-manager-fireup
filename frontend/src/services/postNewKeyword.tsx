import axios from "axios";
const newKeywordUri = "/addkeyword";

//todo make interface
export const postNewKeyword = async (newKeyword: string, categoryId: string) => {
  const request = await axios.post(newKeywordUri, { newKeyword, categoryId });
  return request.data;
};
