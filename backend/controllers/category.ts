export {};
import * as router from "express";
import axios from "axios";
export const categoryRouter = router.Router();
import { v4 as uuidv4 } from "uuid";
import { data } from "../allData";

export interface Iroot {
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

categoryRouter.get("/data", async (req, res) => {
  res.json(data);
});

categoryRouter.put("/addcategory", async (req, res) => {
  const body: InewCategory = req.body;
  if (body.newCategory === "") {
    return res.status(400).json({
      error: "Missing category name",
    });
  }
  const uniqueId = uuidv4();
  const result: Iroot = await axios.get(`https://api.datamuse.com/words?ml=${body.newCategory}&max=10`);

  data.push({
    id: uniqueId,
    categoryName: body.newCategory,
    keywords: result.data.map((value) => {
      return {
        id: uniqueId,
        keywordName: value.word,
      };
    }),
  });
  console.log(data);
  res.json(result.data);
});

categoryRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const dataLength = data.length;

  const index = data.findIndex((x) => x.id === id);
  if (index !== undefined) data.splice(index, 1);

  if (data.length < dataLength) {
    res.status(200).json({
      info: "Category successfully removed",
    });
  } else {
    res.status(400).json({
      error: "Error while removing category",
    });
  }

  console.log(data);
});
