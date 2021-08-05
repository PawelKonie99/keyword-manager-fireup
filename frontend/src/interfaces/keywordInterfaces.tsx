import { Icategory, Ikeyword } from "./categoryInterfaces";
import { Icontent } from "./contentInterfaces";

export interface IaddKeyword extends Icontent {
  categoryId: string;
}

export interface IsetKeywords {
  content: Icategory[];
  categoryId: string;
  newKeywords: Ikeyword[];
}

export interface IkeywordRes {
  newKeywords: Ikeyword[];
  categoryIdResponse: string;
}
