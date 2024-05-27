import express from "express";
import SchemaDefinition from "../models/schemaDefination.js";
import Data from "../models/data.js";

const dataRouter = express.Router();
// Import your SchemaDefinition model

dataRouter.post("/createUserSchema", async (req, res) => {
  try {
    const { userId, tableName, fields } = req.body;

    // Parse the JSON string into a JavaScript array
    const dataArray = JSON.parse(fields);

    // Now you can iterate over the array and access each element
    const columnDefinitions = dataArray.map((item) => ({
      columnName: item.columnName,
      dataType: item.dataType,
    }));

    // Create a new schema definition document
    const schema = await SchemaDefinition.create({
      user: userId,
      tableName,
      fields: columnDefinitions, // Store column definitions as an array
    });

    res.status(201).json({ success: true, data: schema });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Internal Server error",
    });
  }
});

dataRouter.get("/getUserSchema", async (req, res) => {
  try {
    // Find all schema definitions associated with the user
    const schemas = await SchemaDefinition.find({ user: req.query.userId });

    res.status(200).json({ success: true, data: schemas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

dataRouter.post("/addData", async (req, res) => {
  try {
    const { schemaId, userId, data } = req.body;

    // Check if the schema belongs to the user
    const schema = await SchemaDefinition.findById(schemaId);
    if (!schema || schema.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized action",
      });
    }

    const newData = await Data.create({ schema: schemaId, user: userId, data });
    res.status(201).json({
      message: "Data added successfully",
      newData,
      success: true,
    });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

dataRouter.post("/getData", async (req, res) => {
  try {
    const { schemaId, userId } = req.body;
    const returnData = await Data.find({ schema: schemaId, user: userId });
    return res.status(200).json({
      message: "Found the data succesfully",
      returnData,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

dataRouter.delete("/deleteData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body; // Make sure to send userId in the request body

    // Find the data entry to delete
    const dataEntry = await Data.findById(id);

    // Check if the data entry belongs to the user
    if (!dataEntry || dataEntry.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized action",
      });
    }

    await Data.findByIdAndDelete(id);
    res.status(200).json({
      message: "Data deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

dataRouter.put("/updateData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, data } = req.body;

    // Find the data entry to update
    const dataEntry = await Data.findById(id);

    // Check if the data entry belongs to the user
    if (!dataEntry || dataEntry.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized action",
      });
    }

    // Update the data entry
    dataEntry.data = data;
    await dataEntry.save();

    res.status(200).json({
      message: "Data updated successfully",
      success: true,
      updatedData: dataEntry,
    });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
// Replace this with your actual server-side route implementation
dataRouter.delete("/deleteSchema/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the schema and its associated data
    await SchemaDefinition.findByIdAndDelete(id);
    await Data.deleteMany({ schema: id });

    res.status(200).json({
      success: true,
      message: "Schema deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting schema:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default dataRouter;
