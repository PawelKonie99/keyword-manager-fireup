import axios from "axios";
import { data } from "../allData";
import { ImuseApi, InewCategory } from "../interfaces/categoryInterfaces";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../interfaces/allDataInterfaces";
import { IloggerError } from "../interfaces/loggerInterfaces";
import { error, info } from "../logger/logger";

export const getAllCategories = () => {
  return data;
};

export const addCategory = async ({ categoryName }: InewCategory): Promise<Category> => {
  if (!categoryName) {
    error("Missing category name");
  } else {
    const result: ImuseApi = await axios.get(`https://api.datamuse.com/words?ml=${categoryName}&max=10`);

    const newCategory: Category = {
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
  }
};

export const removeCategory = (categoryId: string): string => {
  const initialDataLength = data.length;

  const index = data.findIndex((category) => category.id === categoryId);
  if (index !== -1) data.splice(index, 1);

  if (data.length < initialDataLength) {
    info("Category successfully removed");
  } else {
    error("Error while removing category");
  }
  return categoryId;
};
