export interface Category {
  id: string;
  categoryName: string;
  keywords: KeywordsEntity[];
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
        id: "3",
        keywordName: "audi",
      },
      {
        id: "4",
        keywordName: "renault",
      },
      {
        id: "5",
        keywordName: "opel",
      },
    ],
  },
  {
    id: "6",
    categoryName: "fruits",
    keywords: [
      {
        id: "7",
        keywordName: "apple",
      },
      {
        id: "8",
        keywordName: "banana",
      },
      {
        id: "9",
        keywordName: "strawberry",
      },
    ],
  },
];
