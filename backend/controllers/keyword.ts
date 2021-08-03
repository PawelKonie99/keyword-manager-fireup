import * as router from "express";
export const keywordRouter = router.Router();
import { addNewKeyword, removeKeyword } from "../services/keywordService";

//todo change response
keywordRouter.post("/addkeyword", async (req, res) => {
  return res.send(addNewKeyword(req.body));
});

keywordRouter.delete("/deletekeyword/:id", async (req, res) => {
  return res.send(removeKeyword(req.params.id));
});
