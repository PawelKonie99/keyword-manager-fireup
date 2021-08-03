import axios from "axios";
import { data } from "../allData";
import { ImuseApi, InewCategory } from "../interfaces/categoryInterfaces";
import { v4 as uuidv4 } from "uuid";

export const getAllCategories = () => {
  return data;
};

export const addCategory = async (body: InewCategory) => {
  if (body.newCategory === "") {
    return {
      error: "Missing category name",
    };
  }
  const result: ImuseApi = await axios.get(`https://api.datamuse.com/words?ml=${body.newCategory}&max=10`);

  data.push({
    id: uuidv4(),
    categoryName: body.newCategory,
    keywords: result.data.map((value) => {
      return {
        id: uuidv4(),
        keywordName: value.word,
      };
    }),
  });
  return { info: "Category add successfully" };
};

export const removeCategory = async (categoryId: string) => {
  const dataLength = data.length;

  const index = data.findIndex((x) => x.id === categoryId);
  if (index !== undefined) data.splice(index, 1);

  if (data.length < dataLength) {
    return {
      info: "Category successfully removed",
    };
  } else {
    return {
      error: "Error while removing category",
    };
  }
};
