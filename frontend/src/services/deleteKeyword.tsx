import axios from "axios";
import { Keyword } from "../interfaces/categoryInterfaces";
const deleteKeywordUri = "/deletekeyword";

export const deleteKeyword = async (keywordId: string, categoryId: string): Promise<Keyword[]> => {
  const { data } = await axios.delete(deleteKeywordUri, { data: { keywordId, categoryId } });
  return data;
};
