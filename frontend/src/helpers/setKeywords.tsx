import { Icategory } from "../interfaces/categoryInterfaces";
import { IsetKeywords } from "../interfaces/keywordInterfaces";

export const setKeywords = ({ content, categoryId, newKeywords }: IsetKeywords): Icategory[] => {
  const copiedState: Icategory[] = JSON.parse(JSON.stringify(content));
  const properCategory = copiedState.find((category: Icategory) => category.id === categoryId);
  if (properCategory) {
    properCategory.keywords = newKeywords;
  }
  return copiedState;
};
