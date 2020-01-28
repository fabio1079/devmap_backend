import * as mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = new MongoMemoryServer({
  debug: false
});

export const mongooseTestConnect = async () => {
  await mongod.start();
  const URI = await mongod.getUri();

  mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export const mongooseTestDisconnect = async () => {
  await mongoose.disconnect();
  await mongod.stop();
}
