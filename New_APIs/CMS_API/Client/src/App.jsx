import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import SignIn from "./pages/Signin";
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NewSchema from "./pages/NewSchema";
import ViewSchema from "./pages/ViewSchema";
import SchemaContents from "./pages/SchemaContents"; // Import SchemaContents
import DeleteSchema from "./pages/DeleteSchema";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Place more specific routes before more general ones */}
        <Route path="/schema/:id" element={<SchemaContents />} />
        <Route path="/" element={<ViewSchema />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/New-Schema" element={<NewSchema />} />
        <Route path="/View-Schema" element={<ViewSchema />} />
        <Route path="/Delete-Schema" element={<DeleteSchema />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
