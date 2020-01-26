import * as mongoose from "mongoose";

import PointSchema from "./PointSchema";

export const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  techs: [String],
  location: {
    "type": PointSchema,
    index: "2dsphere"
  }
});

export default mongoose.model('Dev', DevSchema);
