
import Department from "../models/department.js";
import Employee from "../models/employee.js";
import Project from "../models/project.js";
export default class DepartmentController {

    static async getAllDepartments(req, res, next) {
        try {
            const departments = await Department.find();
            if (departments.length === 0) {
                return (res.status(404).json({ message: "Departments not found" }));
            }
            res.status(200).json(departments);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async addDepartment(req, res, next) {
        try {
            const { name, department_code } = req.body;
            const d = await Department.findOne({ code: department_code });
            if (d) {
                return (res.status(401).json({ message: "Department with same code already exists" }));
            }
            const department = new Department({
                code: department_code,
                name: name
            })
            const response = await department.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(401).json({ message: err });
        }
    }

    static async getDepartmentById(req, res, next) {
        try {
            const { departmentId } = req.params;
            const department = await Department.findById(departmentId);
            if (!department) {
                return (res.status(404).json({ message: "Department not found" }));
            }
            res.status(200).json(department);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async updateDepartmentById(req, res, next) {
        try {
            const { departmentId } = req.params;
            const department = await Department.findById(departmentId);
            if (!department) {
                return (res.status(404).json({ message: "Department not found" }));
            }
            const {department_code, name} = req.body;
            if(department_code){
                const d = await Department.findOne({ code: department_code });
                if (d && !d._id.equals(department._id)) {
                    return (res.status(404).json({ message: "Other department with same code exists" }));
                }
                department.code = department_code
            }
            if(name){
                department.name = name;
            }
            const response = await department.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async deleteDepartmentById(req, res, next) {
        try {
            const { departmentId } = req.params;
            const department = await Department.findById(departmentId);
            if (!department) {
                return (res.status(404).json({ message: "Department not found" }));
            }
            await Department.findByIdAndDelete(departmentId);
            res.status(200).json({ message: "Department deleted successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async getEmployeesOfDepartment(req, res, next) {
        try {
            const { departmentId } = req.params;
            const department = await Department.findById(departmentId);
            if (!department) {
                return (res.status(404).json({ message: "Department not found" }));
            }
            const response = await Employee.find({department: department._id})
            if(response.length === 0){
                return (res.status(404).json({message: "No employees found"}))
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async getProjectsOfDepartment(req, res, next) {
        try {
            const { departmentId } = req.params;
            const department = await Department.findById(departmentId);
            if (!department) {
                return (res.status(404).json({ message: "Department not found" }));
            }
            const response = await Project.find({department: department._id})
            if(response.length === 0){
                return (res.status(404).json({message: "No projects found"}))
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

}