export interface Icategory {
  id: string;
  categoryName: string;
  keywords: Ikeyword[];
}
export interface Ikeyword {
  id: string;
  keywordName: string;
}

export interface Idata {
  data: Icategory[];
}
