import Mongoose from "mongoose";

const { Schema } = Mongoose;

const poiSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  categoryText: String,
});

export const Poi = Mongoose.model("Poi", poiSchema);
