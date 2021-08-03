import { data } from "../allData";
import { v4 as uuidv4 } from "uuid";
import { InewKeyword } from "../interfaces/serviceInterface";

export const addNewKeyword = (body: InewKeyword) => {
  if (body.newKeyword === "" || body.newKeyword === undefined) {
    return {
      error: "Missing keyword name",
    };
  }

  const properCategory = data.find((category) => category.id === body.categoryId);
  properCategory.keywords.push({ id: uuidv4(), keywordName: body.newKeyword });

  return { info: "Keyword added successfully" };
};

export const removeKeyword = (keywordId: string) => {
  const dataLength = JSON.stringify(data).length;

  data.forEach((category) => {
    const index = category.keywords.findIndex((x) => x.id === keywordId);
    if (index !== undefined && index !== -1) {
      category.keywords.splice(index, 1);
    }
  });

  if (JSON.stringify(data).length < dataLength) {
    return {
      info: "Keyword successfully removed",
    };
  } else {
    return {
      error: "Error while removing keyword",
    };
  }
};