import Project from "../models/project.js";
import Department from "../models/department.js";


export default class ProjectController {

    static async getAllProjects(req, res, next) {
        try {
            const projects = await Project.find();
            if (projects.length === 0) {
                return (res.status(404).json({ message: "Projects not found" }));
            }
            res.status(200).json(projects);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async addProject(req, res, next) {
        try {
            const { project_code, name, description, department_code  } = req.body;
            const department = await Department.findOne({ code: department_code });
            if (!department) {
                return (res.status(400).json({ message: "Department not found" }));
            }
            const p = await Project.findOne({code: project_code});
            if(p){
                return (res.status(400).json({ message: "Project with same code already exists" }));
            }
            const project = new Project({
                code: project_code,
                name: name,
                description: description,
                department: department._id
            });
            const response = await project.save();
            res.status(201).json(response);
        } catch (err) {
            console.log(err);
            res.status(401).json({ message: err });
        }
    }

    static async getProjectById(req, res, next) {
        try {
            const { projectId } = req.params;
            const project = await Project.findById(projectId);
            if (!project) {
                return (res.status(404).json({ message: "Project not found" }));
            }
            res.status(200).json(project);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async updateProjectById(req, res, next) {
        try {
            const { projectId } = req.params;
            const { project_code, name, description, department_code  } = req.body;
            const project = await Project.findById(projectId);
            if (!project) {
                return (res.status(404).json({ message: "project not found" }));
            }
            if (project_code) project.code = project_code;
            if (name) project.name = name;
            if (description) project.description = description;
            if (department_code) {
                const department = await Department.findOne({ code: department_code });
                if (!department) {
                    return (res.status(404).json({ message: "Department not found" }));
                }
                project.department = department._id;
            }
            const response = await project.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async deleteprojectById(req, res, next) {
        try {
            const { projectId } = req.params;
            const project = await Project.findById(projectId);
            if (!project) {
                return (res.status(404).json({ message: "Project not found" }));
            }
            await Project.findByIdAndDelete(projectId);
            res.status(200).json({ message: "Project deleted successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    

    
}