import express from "express";
import DoctorController from "../controllers/doctors.controller.js";
const doctorRouter = express.Router();

doctorRouter.route("/").get(DoctorController.getAllDoctors);
doctorRouter.route("/").post(DoctorController.addDoctor);
doctorRouter.route("/:doctorId").get(DoctorController.getDoctorById);
doctorRouter.route("/:doctorId").patch(DoctorController.updateDoctorById);
doctorRouter.route("/:doctorId").delete(DoctorController.deleteDoctorById);

export default doctorRouter;