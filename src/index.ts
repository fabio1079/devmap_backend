import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";

import { LOG_LEVEL, PORT } from "./utils/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(LOG_LEVEL));

app.get("/", (_, response) => {
  response.json({
    message: "It Works !"
  });
});

app.listen(PORT, () => {
  console.log(`Backend is running on port: ${PORT}`);
  console.log(`Logger level: ${LOG_LEVEL}`);
});
