import { Category, Keyword } from "../interfaces/categoryInterfaces";

export const setKeywords = (content: Category[], categoryId: string, newKeywords: Keyword[]): Category[] => {
  const copiedState: Category[] = JSON.parse(JSON.stringify(content));
  const properCategory = copiedState.find((category: Category) => category.id === categoryId);
  if (properCategory) {
    properCategory.keywords = newKeywords;
  }
  return copiedState;
};
