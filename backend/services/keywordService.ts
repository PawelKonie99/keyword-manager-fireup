import { data } from "../allData";
import { v4 as uuidv4 } from "uuid";
import { InewKeyword } from "../interfaces/serviceInterface";
import { Category, Keyword } from "../interfaces/allDataInterfaces";
import { error, info } from "../logger/logger";

export const addNewKeyword = ({ keywordName, categoryId }: InewKeyword): Keyword[] => {
  if (!keywordName) {
    error("Missing category name");
  } else {
    const properCategory = data.find((category) => category.id === categoryId);
    if (!properCategory) error("Missing category name");

    const newKeyword: Keyword = { id: uuidv4(), keywordName: keywordName };

    properCategory.keywords.push(newKeyword);

    return properCategory.keywords;
  }
};

export const removeKeyword = ({ keywordId, categoryId }): Keyword[] => {
  const initialDataLength = JSON.stringify(data).length;

  const properCategory = data.find((category) => category.id === categoryId);
  const index = properCategory.keywords.findIndex((keyword) => keyword.id === keywordId);
  if (index !== -1) {
    properCategory.keywords.splice(index, 1);
  }

  if (JSON.stringify(data).length < initialDataLength) {
    info("Keyword successfully removed");
  } else {
    error("Error while removing keyword");
  }
  return properCategory.keywords;
};
