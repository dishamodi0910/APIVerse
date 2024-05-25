import express from "express";
import AppointmentController from "../controllers/appointments.controller.js";

const appointmentRouter = express.Router();

appointmentRouter.route("/").get(AppointmentController.getAllAppointments);
appointmentRouter.route("/").post(AppointmentController.addAppointment);
appointmentRouter.route("/:appointmentId").get(AppointmentController.getAppointmentById);
appointmentRouter.route("/:appointmentId").patch(AppointmentController.updateAppointmentById);
appointmentRouter.route("/:appointmentId").delete(AppointmentController.deleteAppointmentById);
appointmentRouter.route("/:appointmentId/bill").get(AppointmentController.getAppointmentBill);
appointmentRouter.route("/:appointmentId/bill").post(AppointmentController.addAppointmentBill);
appointmentRouter.route("/:appointmentId/bill").patch(AppointmentController.updateAppointmentBill);
appointmentRouter.route("/:appointmentId/bill").delete(AppointmentController.deleteAppointmentBill);



export default appointmentRouter;