export {};
import * as router from "express";
import axios from "axios";
export const elementsRouter = router.Router();

export interface Root {
  data: {
    word: string;
    score: number;
    tags?: string[] | null;
  };
}

elementsRouter.get("/data", async (req, res) => {
  const result: Root = await axios.get(`https://api.datamuse.com/words?ml=${"audi"}&max=10`);
  console.log(result);
  res.json(result.data);
});

// memeRouter.get("/memes/newmeme", async (req, res) => {
//   console.log("elo");
// });

// module.exports = elementsRouter;
