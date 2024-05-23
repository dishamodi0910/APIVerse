import express from "express";
import PatientController from "../controllers/patients.controller.js";

const patientRouter = express.Router();

patientRouter.route("/").get(PatientController.getAllPatients);
patientRouter.route("/").post(PatientController.addPatient);
patientRouter.route("/:patientId").get(PatientController.getPatientById);
patientRouter.route("/:patientId").patch(PatientController.updatePatientById);
patientRouter.route("/:patientId").delete(PatientController.deletePatientById);



export default patientRouter;