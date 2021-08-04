export interface Category {
  id: string;
  categoryName: string;
  keywords: KeywordsEntity[];
}
export interface KeywordsEntity {
  id: string;
  keywordName: string;
}
