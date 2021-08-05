import { data } from "../allData";
import { v4 as uuidv4 } from "uuid";
import { InewKeyword } from "../interfaces/serviceInterface";
import { Ikeyword } from "../interfaces/allDataInterfaces";
import { error, info } from "../logger/logger";
import { IremoveKeyword, IkeywordRes } from "../interfaces/keywordInterfaces";
import { Ierror } from "../interfaces/loggerInterfaces";

/**
 *
 * @param keywordId id of the keyword to remove
 * @param categoryId id of the category that keyword belongs to
 * @returns array of keywords that belongs to category and categoryId or error
 */
export const addNewKeyword = ({ keywordName, categoryId }: InewKeyword): IkeywordRes | Ierror => {
  if (!keywordName) {
    return error("Missing category name");
  }
  const properCategory = data.find((category) => category.id === categoryId);
  if (!properCategory) return error("Category not found");

  const newKeyword: Ikeyword = { id: uuidv4(), keywordName: keywordName };

  properCategory?.keywords.push(newKeyword);

  return {
    newKeywords: properCategory.keywords,
    categoryIdResponse: categoryId,
  };
};

/**
 *
 * @param keywordId id of the keyword to remove
 * @param categoryId id of the category that keyword belongs to
 * @returns array of keywords that belongs to category and categoryId or error
 */
export const removeKeyword = ({ keywordId, categoryId }: IremoveKeyword): IkeywordRes | Ierror => {
  const initialDataLength = JSON.stringify(data).length;

  const properCategory = data.find((category) => category.id === categoryId);
  if (!properCategory) return error("Category not found");

  const index = properCategory?.keywords.findIndex((keyword) => keyword.id === keywordId);
  if (index !== undefined && index !== -1) {
    properCategory?.keywords.splice(index, 1);
  }

  if (JSON.stringify(data).length < initialDataLength) {
    info("Keyword successfully removed");
  } else {
    return error("Error while removing keyword");
  }

  return {
    newKeywords: properCategory.keywords,
    categoryIdResponse: categoryId,
  };
};
