export interface ImuseApi {
  data: [
    {
      word: string;
      score: number;
      tags?: string[] | null;
    }
  ];
}

export interface InewCategory {
  newCategory: string;
}
