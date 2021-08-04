import { Request, Response } from "express";

export const unknownRequest = (req: Request, res: Response) => {
  res.status(404).send({ error: "Unknown endpoint" });
};
