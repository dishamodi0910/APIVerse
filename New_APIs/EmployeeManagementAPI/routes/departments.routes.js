import express from "express";
import DepartmentController from "../controllers/departments.controller.js";

const departmentRouter = express.Router();

departmentRouter.route("/").get(DepartmentController.getAllDepartments);
departmentRouter.route("/").post(DepartmentController.addDepartment);
departmentRouter.route("/:departmentId").get(DepartmentController.getDepartmentById);
departmentRouter.route("/:departmentId").patch(DepartmentController.updateDepartmentById);
departmentRouter.route("/:departmentId").delete(DepartmentController.deleteDepartmentById);
departmentRouter.route("/:departmentId/employees").get(DepartmentController.getEmployeesOfDepartment);
departmentRouter.route("/:departmentId/projects").get(DepartmentController.getProjectsOfDepartment);





export default departmentRouter;