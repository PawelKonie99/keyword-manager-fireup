import axios from "axios";
import { IkeywordRes } from "../interfaces/keywordInterfaces";
const deleteKeywordUri = "/deletekeyword";

export const deleteKeyword = async (keywordId: string, categoryId: string): Promise<IkeywordRes> => {
  const { data } = await axios.delete(deleteKeywordUri, { data: { keywordId, categoryId } });

  return data;
};
