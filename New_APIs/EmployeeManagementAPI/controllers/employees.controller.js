import Employee from "../models/employee.js";
import Department from "../models/department.js";
import Project from "../models/project.js";


export default class EmployeeController {


    static async getAllEmployees(req, res, next) {
        try {
            const employees = await Employee.find();
            if (employees.length === 0) {
                return (res.status(404).json({ message: "Employees not found" }));
            }
            res.status(200).json(employees);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async addEmployee(req, res, next) {
        try {
            const { ssn, name, email, department_code } = req.body;
            const department = await Department.findOne({ code: department_code });
            if (!department) {
                return (res.status(400).json({ message: "Department not found" }));
            }
            const e = await Employee.findOne({ ssn: ssn });
            if (e) {
                return (res.status(400).json({ message: "Employee already exists" }));
            }
            const employee = new Employee({
                ssn: ssn,
                name: name,
                email: email,
                department: department._id
            })
            const response = await employee.save();
            res.status(201).json(response);
        } catch (err) {
            console.log(err);
            res.status(401).json({ message: err });
        }
    }

    static async getEmployeeById(req, res, next) {
        try {
            const { employeeId } = req.params;
            const employee = await Employee.findById(employeeId).populate("department");
            if (!employee) {
                return (res.status(404).json({ message: "Employee not found" }));
            }
            res.status(200).json(employee);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async updateEmployeeById(req, res, next) {
        try {
            const { employeeId } = req.params;
            const { name, email, department_code } = req.body;
            const employee = await Employee.findById(employeeId);
            if (!employee) {
                return (res.status(404).json({ message: "Employee not found" }));
            }

            if (name) employee.name = name;
            if (email) employee.email = email;
            if (department_code) {
                const department = await Department.findOne({ code: department_code });
                if (!department) {
                    return (res.status(404).json({ message: "Department not found" }));
                }
                employee.department = department._id;
            }
            const response = await employee.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async deleteEmployeeById(req, res, next) {
        try {
            const { employeeId } = req.params;
            const employee = await Employee.findById(employeeId);
            if (!employee) {
                return (res.status(404).json({ message: "Employee not found" }));
            }
            await Employee.findByIdAndDelete(employeeId);
            res.status(200).json({ message: "Employee deleted successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async assignProjectToEmployee(req, res, next) {
        try {
            const { employeeId } = req.params;
            const { project_code } = req.body;
            const employee = await Employee.findById(employeeId);
            if (!employee) {
                return (res.status(404).json({ message: "Employee not found" }));
            }
            const project = await Project.findOne({code: project_code});
            if (!project) {
                return (res.status(404).json({ message: "Project not found" }));
            }
            if (!employee.department.equals(project.department)) {
                return (res.status(404).json({ message: "Employee and Project must be of same department" }));
            }
            if (employee.projects.includes(project._id)) {
                return (res.status(401).json({ message: "Project already assigned" }));
            }
            employee.projects.push(project._id);
            const response = await employee.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async deassignProjectToEmployee(req, res, next) {
        try {
            const { employeeId } = req.params;
            const { project_code } = req.body;
            const employee = await Employee.findById(employeeId);
            if (!employee) {
                return (res.status(404).json({ message: "Employee not found" }));
            }
            const project = await Project.findOne({code: project_code});
            if (!project) {
                return (res.status(404).json({ message: "Project not found" }));
            }
            if (!employee.projects.includes(project._id)) {
                return (res.status(401).json({ message: "Project not assigned assigned" }));
            }
            employee.projects = employee.projects.filter((pid) => {
                return (!pid.equals(project._id));
            });
            
            const response = await employee.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async getProjectsOfEmployee(req, res, next) {
        try {
            const { employeeId } = req.params;
            const employee = await Employee.findById(employeeId).populate("projects");
            if (!employee) {
                return (res.status(404).json({ message: "Employee not found" }));
            }
            const response = employee.projects;
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }


}