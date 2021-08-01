import * as express from "express";
import * as cors from "cors";
import { unknownRequest } from "./middlewares/unknowRequest";
import { elementsRouter } from "./controllers/elements";
const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use("/", elementsRouter);
// app.use("/", usersRouter);
// app.use("/", loginRouter);

app.use(unknownRequest);

module.exports = app;
