import { data } from "../allData";
import { v4 as uuidv4 } from "uuid";
import { InewKeyword } from "../interfaces/serviceInterface";
import { Category, Keyword } from "../interfaces/allDataInterfaces";
import { error, info } from "../logger/logger";
import { IremoveKeyword } from "../interfaces/keywordInterfaces";
import { Ierror } from "../interfaces/loggerInterfaces";

//todo return
export const addNewKeyword = ({
  keywordName,
  categoryId,
}: InewKeyword): Keyword[] | Ierror => {
  if (!keywordName) {
    return error("Missing category name");
  }
  const properCategory = data.find((category) => category.id === categoryId);
  if (!properCategory) return error("Category not found");

  const newKeyword: Keyword = { id: uuidv4(), keywordName: keywordName };

  properCategory?.keywords.push(newKeyword);

  return properCategory?.keywords;
};

export const removeKeyword = ({
  keywordId,
  categoryId,
}: IremoveKeyword): Keyword[] | Ierror => {
  const initialDataLength = JSON.stringify(data).length;

  const properCategory = data.find((category) => category.id === categoryId);
  if (!properCategory) return error("Category not found");

  const index = properCategory?.keywords.findIndex(
    (keyword) => keyword.id === keywordId
  );
  if (index !== undefined && index !== -1) {
    properCategory?.keywords.splice(index, 1);
  }

  if (JSON.stringify(data).length < initialDataLength) {
    info("Keyword successfully removed");
  } else {
    return error("Error while removing keyword");
  }
  return properCategory?.keywords;
};
