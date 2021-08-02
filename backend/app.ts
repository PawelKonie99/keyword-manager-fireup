import * as express from "express";
import * as cors from "cors";
import { unknownRequest } from "./middlewares/unknowRequest";
import { categoryRouter } from "./controllers/category";
import { keywordRouter } from "./controllers/keyword";
const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use("/", categoryRouter);
app.use("/", keywordRouter);
// app.use("/", usersRouter);
// app.use("/", loginRouter);

app.use(unknownRequest);

module.exports = app;
