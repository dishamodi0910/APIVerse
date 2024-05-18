import express from "express";

import { getAllMessages, getMessage, getMessagesByuserId, createNewMessage, deleteMessage, updateMessage } from '../controllers/messages.controller.js';
import { isLoggedIn, isOwner } from "../middleware/index.js";

const router = express.Router();

router.route('/getMessages').get(isLoggedIn, getAllMessages);
router.route('/getMessagesByUserId/:id').get(isLoggedIn, isOwner, getMessagesByuserId);
router.route('/createNewMessage').post(isLoggedIn, createNewMessage);

export default router;