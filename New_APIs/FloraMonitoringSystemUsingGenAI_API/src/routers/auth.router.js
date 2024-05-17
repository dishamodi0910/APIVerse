import express from "express";


import { register } from '../controllers/auth.controller.js';
import { upload } from "../middleware/index.js";

const router = express.Router();

router.route('/register').post( upload.single('selectedFile'),register);


export default router;