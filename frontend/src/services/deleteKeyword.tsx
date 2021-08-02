import axios from "axios";
const deleteKeywordUri = "/deletekeyword/";

//todo make interface
export const deleteKeyword = async (keywordId: string) => {
  const request = await axios.delete(`${deleteKeywordUri}${keywordId}`);
  return request.data;
};
