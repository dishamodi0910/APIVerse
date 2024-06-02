import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "react-hot-toast";

function FieldPair({
  onColumnNameChange,
  onDataTypeChange,
  columnName,
  dataType,
}) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
      <input
        type="text"
        placeholder="Column Name"
        value={columnName}
        onChange={onColumnNameChange}
        className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 flex-grow"
      />
      <select
        value={dataType}
        onChange={onDataTypeChange}
        className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
      >
        <option value="">Select Data Type</option>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        {/* Add more data types as needed */}
      </select>
    </div>
  );
}

function NewSchema() {
  const [tableName, setTableName] = useState("");
  const [fields, setFields] = useState([{ columnName: "", dataType: "" }]);

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleColumnNameChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].columnName = e.target.value;
    setFields(newFields);
  };

  const handleDataTypeChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].dataType = e.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { columnName: "", dataType: "" }]);
  };

  const validateFields = () => {
    if (!tableName) {
      toast.error("Table name cannot be empty");
      return false;
    }

    for (const field of fields) {
      if (!field.columnName || !field.dataType) {
        toast.error("All fields must have a column name and a data type");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }
     const stringifiedFields = JSON.stringify(fields);

    const data = {
      userId: localStorage.getItem("userId"), // Replace with actual user ID from auth
      tableName,
      fields: stringifiedFields,
    };

    try {
      const link = import.meta.env.VITE_SITE_LINK + "/user/createUserSchema";
      const response = await axios.post(link, data);
      console.log(response);
      toast.success("Added table successfully");

      // Reset the form after successful submission
      setTableName("");
      setFields([{ columnName: "", dataType: "" }]);
    } catch (error) {
      console.error("Error adding table:", error);
      toast.error("Failed to add table. Please try again later.");
    }
  };

  return (
    <div className="">
      <Navbar />
      <br />
      <br />
      <br />

      <div className="container mx-auto p-6 md:p-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900 font-serif">
          Create Schema
        </h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Table Name"
            value={tableName}
            onChange={handleTableNameChange}
            className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-blue-500 w-full shadow-sm"
          />
        </div>
        {fields.map((field, index) => (
          <FieldPair
            key={index}
            columnName={field.columnName}
            dataType={field.dataType}
            onColumnNameChange={(e) => handleColumnNameChange(e, index)}
            onDataTypeChange={(e) => handleDataTypeChange(e, index)}
          />
        ))}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleAddField}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add Another Field
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSchema;
