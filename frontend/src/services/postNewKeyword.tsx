import axios from "axios";
import { IkeywordRes } from "../interfaces/keywordInterfaces";
import { Ierror } from "../interfaces/loggerInterfaces";
const newKeywordUri = "/addkeyword";

export const postNewKeyword = async (keywordName: string, categoryId: string): Promise<IkeywordRes | undefined> => {
  const { data } = await axios.post(newKeywordUri, { keywordName: keywordName, categoryId });
  const isError = data as Ierror;
  if (isError.error) {
    return undefined;
  }

  return data;
};
