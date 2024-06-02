import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDatabase, FaFont, FaCalendar, FaHashtag } from "react-icons/fa";

// Utility function to get the appropriate icon for a data type
const getIcon = (dataType) => {
  switch (dataType) {
    case "number":
      return <FaHashtag className="text-blue-500" />;
    case "text":
      return <FaFont className="text-green-500" />;
    case "date":
      return <FaCalendar className="text-yellow-500" />;
    default:
      return <FaDatabase className="text-gray-500" />;
  }
};

// eslint-disable-next-line react/prop-types
function SchemaCard({ data }) {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle card click and navigate to schema contents
  const handleCardClick = (id) => {
    navigate(`/schema/${id}`);
  };

  return (
    <div
      className="bg-white shadow-xl rounded-lg p-6 mb-4 w-full max-w-md m-4 cursor-pointer"
      // eslint-disable-next-line react/prop-types
      onClick={() => handleCardClick(data[0]._id)}
    >
      {data.map((schema) => (
        <div key={schema._id} className="mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 transition transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b-2 border-blue-300 pb-2">
              {schema.tableName}
            </h2>
            <ul className="space-y-4">
              {schema.fields.map((field, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-blue-900 bg-blue-200 p-3 rounded-lg shadow-inner"
                >
                  <span className="font-semibold">{field.columnName}</span>
                  <span className="text-sm text-blue-700">
                    {field.dataType}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SchemaCard;
