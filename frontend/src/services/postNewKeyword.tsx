import axios from "axios";
const newKeywordUri = "/addkeyword";

//todo make interface
export const postNewKeyword = async (keywordName: string, categoryId: string) => {
  const request = await axios.post(newKeywordUri, { keywordName: keywordName, categoryId });
  return request.data;
};
