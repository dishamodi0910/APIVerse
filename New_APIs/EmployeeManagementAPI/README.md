# Description
The Employee Management API provides functionality to manage employees, departments, and projects within an organization. It supports the following operations:

- CRUD on Employee
- CRUD on Department
- CRUD on Project
- Assign/Deassign Project: Assign or remove employees from projects, ensuring that the employee's department matches the project's department.

# API Endpoints
## Employee Management
### GET /api/employees
Retrieve all the employees.

### POST /api/employees
Add a new employee. Pass the employee information in request body.

### GET /api/employees/:employeeId
Retrieve employee by id.

### PATCH /api/employees/:employeeId
Update employee by id.

### DELETE /api/employees/:employeeId
Delete employee by id.

### GET /api/employees/:employeeId/projects
Retrieve the projects assigned to the employee.

### POST /api/employees/:employeeId
Assign a project to the employee. Pass project_code in request body.

### DELETE /api/employees/:employeeId
Deassign a project from the employee. Pass project_code in request body.


## Department Management
### GET /api/departments
Retrieve all the departments.

### POST /api/departments
Add a new department. Pass the department information in request body.

### GET /api/departments/:departmentId
Retrieve department by id.

### PATCH /api/departments/:departmentId
Update department by id.

### DELETE /api/departments/:departmentId
Delete department by id.

### GET /api/departments/:departmentId/employees
Retrieve the employees of a department.

### GET /api/departments/:departmentId/projects
Retrieve the projects of a department.



## Project Management
### GET /api/projects
Retrieve all the projects.

### POST /api/projects
Add a new project. Pass the project information in request body.

### GET /api/projects/:projectId
Retrieve project by id.

### PATCH /api/projects/:projectId
Update project by id.

### DELETE /api/projects/:projectId
Delete project by id.



# Getting Started
## Pre-Requisites
Make sure you have:
- Node
- MongoDB

## Steps to Run
- Clone the repository and navigate to the main directory **EmployeeManagementAPI**

    ```bash
    cd EmployeeManagementAPI
   ```
- Create a **.env** file in the main directory
    ```bash
    touch .env
   ```

- Add the following neccessary details in the **.env** file
    ```bash
    PORT=4000
    DB_URI=mongodb://localhost:27017/<database name>
   ```
- Install dependencies 
    ```bash
    npm install
   ```

- Run the server code
    ```bash
    node index.js
   ```

## Request Body Example
### Request body for employee
```bash
    {
        "ssn": "1",
        "name": "John Doe",
        "email": "john@abc.com",
        "department_code": "AI01"
    }   
```
### Request body for department
```bash
    {
        "department_code": "AI02",
        "name": "Computer Vision"
    }
```
### Request body for project
```bash
    {
        "project_code": "AIP02",
        "name": "Face Detection",
        "description": "Detect faces in a crowd",
        "department_code": "AI02"
    }
```

### Request body for assigning project
```bash
    {
        "project_code": "AIP02",
    }
```
