import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";

const DeleteSchema = () => {
  const [schemas, setSchemas] = useState([]);
  const userId = localStorage.getItem("userId"); // Replace with actual user ID from auth

  useEffect(() => {
    const fetchSchemas = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SITE_LINK}/user/getUserSchema`,
          {
            params: { userId },
          }
        );
        setSchemas(response.data.data);
      } catch (error) {
        console.error("Error fetching schemas:", error);
        toast.error("Error fetching schemas");
      }
    };

    fetchSchemas();
  }, [userId]);

  const handleDelete = async (schemaId) => {
    if (
      window.confirm(
        "Deleting the schema will delete all its contents. Are you sure you want to proceed?"
      )
    ) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_SITE_LINK}/user/deleteSchema/${schemaId}`
        );
        toast.success("Schema deleted successfully");

        // Refresh the list of schemas after deletion
        const response = await axios.get(
          `${import.meta.env.VITE_SITE_LINK}/user/getUserSchema`,
          {
            params: { userId },
          }
        );
        setSchemas(response.data.data);
      } catch (error) {
        console.error("Error deleting schema:", error);
        toast.error("Error deleting schema");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container mx-auto p-6 md:p-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900 font-serif">
          Delete Schema
        </h1>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schemas.map((schema) => (
            <li
              key={schema._id}
              className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-700">
                {schema.tableName}
              </h2>
              <button
                onClick={() => handleDelete(schema._id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteSchema;
