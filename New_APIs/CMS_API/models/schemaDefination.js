import { Schema, model } from "mongoose";

const schemaDefinitionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  tableName: String,
  // Define fields for your schema
  fields: [{ columnName: String, dataType: String }],
});

const SchemaDefinition = model("SchemaDefination", schemaDefinitionSchema);

export default SchemaDefinition;
