import * as mongoose from "mongoose";

import PointSchema, { PointType } from "./PointSchema";

export interface IDev extends mongoose.Document {
  name: string;
  github_username: string;
  bio: string;
  techs: string[];
  location: PointType;
}

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

const DevModel = mongoose.model<IDev>("Dev", DevSchema);

export default DevModel;
