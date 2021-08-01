export const unknownRequest = (req, res) => {
  res.status(404).send({ error: "Unknow endpoint" });
};
