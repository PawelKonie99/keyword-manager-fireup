import axios from "axios";
import { Keyword } from "../interfaces/categoryInterfaces";
const newKeywordUri = "/addkeyword";

export const postNewKeyword = async (keywordName: string, categoryId: string): Promise<Keyword[]> => {
  const { data } = await axios.post(newKeywordUri, { keywordName: keywordName, categoryId });
  return data;
};
