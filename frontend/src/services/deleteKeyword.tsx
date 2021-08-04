import axios from "axios";
const deleteKeywordUri = "/deletekeyword/";

//todo make interface
export const deleteKeyword = async (keywordId: string): Promise<string> => {
  const { data } = await axios.delete(`${deleteKeywordUri}${keywordId}`);
  return data.toString();
};
