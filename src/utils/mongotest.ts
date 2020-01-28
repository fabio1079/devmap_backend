import * as mongoose from "mongoose";

export const mongooseTestConnect = async () => {
  const URI = process.env.MONGO_URL || "";

  await mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export const mongooseTestDisconnect = async () => {
  await mongoose.disconnect();
}
