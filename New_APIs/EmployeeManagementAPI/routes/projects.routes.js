import express from "express";
import ProjectController from "../controllers/projects.controller.js";

const projectRouter = express.Router();

projectRouter.route("/").get(ProjectController.getAllProjects);
projectRouter.route("/").post(ProjectController.addProject);
projectRouter.route("/:projectId").get(ProjectController.getProjectById);
projectRouter.route("/:projectId").patch(ProjectController.updateProjectById);
projectRouter.route("/:projectId").delete(ProjectController.deleteprojectById);

export default projectRouter;