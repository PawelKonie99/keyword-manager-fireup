export interface Category {
  id: string;
  categoryName: string;
  keywords?: KeywordsEntity[] | null;
}
export interface KeywordsEntity {
  id: string;
  keywordName: string;
}

export const data: Category[] = [
  {
    id: "2",
    categoryName: "cars",
    keywords: [
      {
        id: "1",
        keywordName: "audi",
      },
      {
        id: "2",
        keywordName: "renault",
      },
      {
        id: "3",
        keywordName: "opel",
      },
    ],
  },
  {
    id: "4",
    categoryName: "fruits",
    keywords: [
      {
        id: "5",
        keywordName: "apple",
      },
      {
        id: "6",
        keywordName: "banana",
      },
      {
        id: "7",
        keywordName: "strawberry",
      },
    ],
  },
];
