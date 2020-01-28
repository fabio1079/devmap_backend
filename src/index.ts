import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as mongoose from "mongoose";

import { LOG_LEVEL, PORT } from "./utils/config";
import { getMongoUriByEnv } from "./utils/mongoenv";
import routes from "./routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(LOG_LEVEL));

app.use(routes);

(() => {
  if (process.env.NODE_ENV === "test") return;

  try {
    const MONGO_URI = getMongoUriByEnv();
    console.log("Mongo URI:\n", MONGO_URI);

    mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log(`Backend is running on port: ${PORT}`);
      console.log(`Logger level: ${LOG_LEVEL}`);
    });
  } catch (err) {
    console.log("Something went wrong :(\nWill not initialize app\n");
    console.error(err);
  }
})();
