import { data } from "../allData";
import { v4 as uuidv4 } from "uuid";
import { InewKeyword } from "../interfaces/serviceInterface";

export const addNewKeyword = (body: InewKeyword) => {
  if (!body.keywordName) {
    return {
      error: "Missing keyword name",
    };
  }

  const properCategory = data.find((category) => category.id === body.categoryId);
  if (!properCategory) return { error: "Category not found" };

  properCategory.keywords.push({ id: uuidv4(), keywordName: body.keywordName });

  return { info: "Keyword added successfully" };
};

export const removeKeyword = (keywordId: string) => {
  const initialDataLength = JSON.stringify(data).length;

  // kategoria find by id z argumentu
  // usuniecie keyworda
  // sprawdzenie czy instnieje w category data.includes(keywordName)

  data.forEach((category) => {
    const index = category.keywords.findIndex((x) => x.id === keywordId);
    if (index && index !== -1) {
      category.keywords.splice(index, 1);
    }
  });

  if (JSON.stringify(data).length < initialDataLength) {
    return {
      info: "Keyword successfully removed",
    };
  } else {
    return {
      error: "Error while removing keyword",
    };
  }
};
