import { Category, Keyword } from "./categoryInterfaces";
import { Icontent } from "./contentInterfaces";

export interface IaddKeyword extends Icontent {
  categoryId: string;
}

export interface IsetKeywords {
  content: Category[],
   categoryId: string,
    newKeywords: Keyword[]
}