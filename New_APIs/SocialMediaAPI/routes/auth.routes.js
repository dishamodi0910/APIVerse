import express from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.route("/register").post(AuthController.registerUser);
authRouter.route("/login").post(AuthController.loginUser);

export default authRouter;