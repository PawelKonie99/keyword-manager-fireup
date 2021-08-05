import { Category } from "../interfaces/categoryInterfaces";
import { IsetKeywords } from "../interfaces/keywordInterfaces";

export const setKeywords = ({content, categoryId, newKeywords}: IsetKeywords): Category[] => {
  const copiedState: Category[] = JSON.parse(JSON.stringify(content));
  const properCategory = copiedState.find((category: Category) => category.id === categoryId);
  if (properCategory) {
    properCategory.keywords = newKeywords;
  }
  return copiedState;
};
