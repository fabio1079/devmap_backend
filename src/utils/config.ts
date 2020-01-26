import * as dotenv from "dotenv";

dotenv.config();

let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/../../.env.test`;
    break;
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}

dotenv.config({ path: path });

const DB_LINK = process.env.DB_LINK || "";
const DB_NAME = process.env.DB_NAME || "";

const CON_LINK =
  `mongodb+srv://${DB_LINK}/${DB_NAME}?retryWrites=true&w=majority`;

export const PORT = process.env.PORT;
export const LOG_LEVEL = process.env.LOG_LEVEL || "dev";
export const MONGO_CONNECTION = CON_LINK;
