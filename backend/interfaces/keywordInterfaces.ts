import { Keyword } from "./allDataInterfaces";

export interface IremoveKeyword {
  keywordId: string;
  categoryId: string;
}

export interface IKeywordRes {
  newKeywords: Keyword[];
  categoryIdResponse: string;
}
