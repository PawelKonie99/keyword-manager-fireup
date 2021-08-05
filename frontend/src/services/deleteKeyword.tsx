import axios from "axios";
import { IKeywordRes } from "../interfaces/keywordInterfaces";
const deleteKeywordUri = "/deletekeyword";

export const deleteKeyword = async (keywordId: string, categoryId: string): Promise<IKeywordRes> => {
  const { data } = await axios.delete(deleteKeywordUri, { data: { keywordId, categoryId } });

  return data;
};
