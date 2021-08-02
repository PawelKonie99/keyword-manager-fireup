export interface Category {
  id: string;
  categoryName: string;
  keywords?: KeywordsEntity[] | null;
}
export interface KeywordsEntity {
  id: string;
  keywordName: string;
}
