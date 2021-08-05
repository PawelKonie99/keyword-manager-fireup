import { Ikeyword } from "./allDataInterfaces";

export interface IremoveKeyword {
  keywordId: string;
  categoryId: string;
}

export interface IkeywordRes {
  newKeywords: Ikeyword[];
  categoryIdResponse: string;
}
