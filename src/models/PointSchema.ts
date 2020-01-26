import * as mongoose from "mongoose";

/**
 * coordinates: [longitude, latitude]
 */
export type PointType = {
  "type": string,
  coordinates: [number, number]
}

export const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});


export default PointSchema;
