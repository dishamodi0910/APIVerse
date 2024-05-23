import express from "express";
import SpecialityController from "../controllers/specialities.controller.js";

const specialityRouter = express.Router();

specialityRouter.route("/").get(SpecialityController.getAllSpecialities);
specialityRouter.route("/").post(SpecialityController.addSpeciality);
specialityRouter.route("/:specialityId").get(SpecialityController.getSpecialityById);
specialityRouter.route("/:specialityId").patch(SpecialityController.updateSpecialityById);
specialityRouter.route("/:specialityId").delete(SpecialityController.deleteSpecialityById);



export default specialityRouter;