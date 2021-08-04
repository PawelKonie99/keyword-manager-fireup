import axios from "axios";
import { data } from "../allData";
import { ImuseApi, InewCategory } from "../interfaces/categoryInterfaces";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../interfaces/allDataInterfaces";
import { IloggerError } from "../interfaces/loggerInterfaces";

export const getAllCategories = () => {
  return data;
};

export const addCategory = async ({ categoryName }: InewCategory): Promise<Category | IloggerError> => {
  if (categoryName === "") {
    return {
      error: "Missing category name",
    };
  }
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
};

export const removeCategory = (categoryId: string) => {
  const initialDataLength = data.length;

  const index = data.findIndex((x) => x.id === categoryId);
  if (index !== -1) data.splice(index, 1);

  if (data.length < initialDataLength) {
    return {
      info: "Category successfully removed",
    };
  } else {
    return {
      error: "Error while removing category",
    };
  }
};
