import express from "express";
import EmployeeController from "../controllers/employees.controller.js";


const employeeRouter = express.Router();


employeeRouter.route("/").get(EmployeeController.getAllEmployees);
employeeRouter.route("/").post(EmployeeController.addEmployee);
employeeRouter.route("/:employeeId").get(EmployeeController.getEmployeeById);
employeeRouter.route("/:employeeId").patch(EmployeeController.updateEmployeeById);
employeeRouter.route("/:employeeId").delete(EmployeeController.deleteEmployeeById);
employeeRouter.route("/:employeeId/projects").get(EmployeeController.getProjectsOfEmployee);
employeeRouter.route("/:employeeId/projects").post(EmployeeController.assignProjectToEmployee);
employeeRouter.route("/:employeeId/projects").delete(EmployeeController.deassignProjectToEmployee);





export default employeeRouter;