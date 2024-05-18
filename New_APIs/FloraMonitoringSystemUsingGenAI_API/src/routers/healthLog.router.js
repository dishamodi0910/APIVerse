import express from "express";

import { getAllHealthLogs, getHealthLog, getHealthLogsByuserId, getHealthLogsByplantId, createNewHealthLog, deleteHealthLog, updateHealthLog } from '../controllers/healthlog.controller.js';
import { isLoggedIn, isOwner, upload } from "../middleware/index.js";

const router = express.Router();

router.route('/getAllHealthLogs').get(isLoggedIn, getAllHealthLogs);
router.route('/getHealthLog/:id').get(isLoggedIn, getHealthLog);
router.route('/getHealthLogsByUserId/:id').get(isLoggedIn, isOwner, getHealthLogsByuserId);
router.route('/getHealthLogsByPlantId/:id').get(isLoggedIn, getHealthLogsByplantId);
router.route('/createNewHealthLog').post(isLoggedIn,  upload.single('attachment'), createNewHealthLog);

export default router;