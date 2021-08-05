import axios from "axios";
import { data } from "../allData";
import { ImuseApi, InewCategory } from "../interfaces/categoryInterfaces";
import { v4 as uuidv4 } from "uuid";
import { Icategory } from "../interfaces/allDataInterfaces";
import { error, info } from "../logger/logger";
import { Ierror } from "../interfaces/loggerInterfaces";

/**
 *
 * @returns whole data of categories and keywords
 */
export const getAllCategories = (): Icategory[] => {
  return data;
};

/**
 *
 * @param categoryName name of the new category
 * @returns new Category object or error
 */
export const addCategory = async ({ categoryName }: InewCategory): Promise<Icategory | Ierror> => {
  if (!categoryName) {
    return error("Missing category name");
  }

  const result: ImuseApi = await axios.get(`https://api.datamuse.com/words?ml=${categoryName}&max=10`);

  const newCategory: Icategory = {
    id: uuidv4(),
    categoryName,
    keywords: result.data.map((item) => {
      return {
        id: uuidv4(),
        keywordName: item.word,
      };
    }),
  };
  data.push(newCategory);

  return newCategory;
};

/**
 *
 * @param categoryId id of the category to remove
 * @returns  if of removed category or error
 */
export const removeCategory = (categoryId: string): string | Ierror => {
  const initialDataLength = data.length;

  const index = data.findIndex((category) => category.id === categoryId);
  if (index !== -1) data.splice(index, 1);

  if (data.length < initialDataLength) {
    info("Category successfully removed");
  } else {
    return error("Error while removing category");
  }

  return categoryId;
};
