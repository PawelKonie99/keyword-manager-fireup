import * as router from "express";
export const categoryRouter = router.Router();
import { addCategory, getAllCategories, removeCategory } from "../services/categoryService";

categoryRouter.get("/data", async (req, res) => {
  return res.json(getAllCategories());
});

categoryRouter.post("/addcategory", async (req, res) => {
  return res.send(await addCategory(req.body));
});

categoryRouter.delete("/deletecategory/:id", async (req, res) => {
  return res.send(removeCategory(req.params.id));
});
