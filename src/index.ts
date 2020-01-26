import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";

import { LOG_LEVEL, PORT } from "./utils/config";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(LOG_LEVEL));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Backend is running on port: ${PORT}`);
  console.log(`Logger level: ${LOG_LEVEL}`);
});
