import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    scientificName: {
      type: String,
      trim: true,
    },
    localName: {
      type: String,
      trim: true,
    },
    accuracy: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("plantFeatures", plantSchema);
