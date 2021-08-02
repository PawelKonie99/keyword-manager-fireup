import * as router from "express";
export const keywordRouter = router.Router();
import { data } from "../allData";

keywordRouter.delete("/deletekeyword/:id", async (req, res) => {
  const id = req.params.id;
  const dataLength = JSON.stringify(data).length;

  data.forEach((e) => {
    // e.keywords.forEach(v => {
    //     const index = v.findIndex((x) => x.id === id);
    //     if (index !== undefined) e.keywords.splice(index, 1);

    // })

    const index = e.keywords.findIndex((x) => x.id === id);
    if (index !== undefined && index !== -1) {
      e.keywords.splice(index, 1);
    }
  });

  if (JSON.stringify(data).length < dataLength) {
    res.status(200).json({
      info: "Keyword successfully removed",
    });
  } else {
    res.status(400).json({
      error: "Error while removing keyword",
    });
  }
});
