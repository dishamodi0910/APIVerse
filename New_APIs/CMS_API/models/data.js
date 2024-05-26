import mongoose from "mongoose";

const { Schema, model } = mongoose;

const dataSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  schema: {
    type: Schema.Types.ObjectId,
    ref: "SchemaDefinition",
    required: true,
  },
  data: Schema.Types.Mixed, // Store data flexibly
});

const Data = model("Data", dataSchema);

export default Data;
