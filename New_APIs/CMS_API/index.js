import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./Database/db.js";
import checkForAuthenticationCookie from "./middlewares/authentication.js";
import cookieParser from "cookie-parser";
import path from "path";
import userRouter from "./routes/user.js";
import dataRouter from "./routes/dataOps.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve("./public")));
app.use(checkForAuthenticationCookie("token"));

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  return res.status(200).json({
    message: "Server Healthy no worry",
    success: true,
  });
});

app.use("/auth", userRouter);
app.use("/user", dataRouter);

// Start the server
app.listen(port);
