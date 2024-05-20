# Description
This API facilitates Hospital Management, offering functionality to manage patients, doctors, appointments, and their associated bills.

# API Endpoints
## Patient Endpoints
### GET /api/patients
Retrieve all patients
### POST /api/patients
Add a new patient
### GET /api/patients/:patientId
Retrieve a specific patient
### PATCH /api/patients/:patientId
Update a specific patient
### DELETE /api/patients/:patientId
Delete a specific patient

## Doctor Endpoints
### GET /api/doctors
Retrieve all doctors
### POST /api/doctors
Add a new doctor
### GET /api/doctors/:doctorId
Retrieve a specific doctor
### PATCH /api/doctors/:doctorId
Update a specific doctor
### DELETE /api/doctors/:doctorId
Delete a specific doctor


## Appointment Endpoints
### GET /api/appointments
Retrieve all appointments
### POST /api/appointments
Create a new appointment
### GET /api/appointments/:appointmentId
Retrieve a specific appointment
### PATCH /api/appointments/:appointmentId
Update a specific appointment
### DELETE /api/appointments/:appointmentId
Delete a specific appointment
### GET /api/appointments/:appointmentId/bill
Retrieve bill of a specific appointment
### POST /api/appointments/:appointmentId/bill
Create bill of a specific appointment
### PATCH /api/appointments/:appointmentId/bill
Update bill of a specific appointment
### DELETE /api/appointments/:appointmentId/bill
Delete bill of a specific appointment

## Speciality Endpoints
### GET /api/specialities
Retrieve all specialities
### POST /api/specialities
Add a new speciality
### GET /api/specialities/:specialityId
Retrieve a specific speciality 
### PATCH /api/specialities/:specialityId
Update a specific speciality
### DELETE /api/specialities/:specialityId
Delete a specific speciality

# Getting Started
## Pre-Requisites
Make sure you have:
- Node
- MongoDB

## Steps to Run
- Clone the repository and navigate to the main directory **HospitalAPI**

    ```bash
    cd HospitalAPI
   ```
- Create a **.env** file in the main directory
    ```bash
    touch .env
   ```

- Add the following neccessary details in the **.env** file
    ```bash
    PORT=4000
    DBURL=mongodb://localhost:27017/<database name>
   ```
- Install dependencies 
    ```bash
    npm install
   ```
- Add initial data to the database
    ```bash
    node seed.js
   ```
- Run the server code
    ```bash
    node index.js
   ```

## Request Body Example
### Patient request body 
```bash
    {
        "name": "John Doe",
        "gender": "Male",
        "phone": "9999999999",
        "dateOfBirth": "1990-05-15",
        "address": "Delhi"
    }
```
### Doctor request body 
```bash
    #replace with ids present in your database
    {
        "name": "John Doe",
        "phone": "9999999999",
        "gender": "Male",
        "specialityId": "664b580728e29bccc9eb30e2" 
    }
```
### Appointment request body 
```bash
    #replace with ids present in your database
    {
        "doctorId": "664b35fc2d0604dd4cbdca91", 
        "patientId": "664b35fc2d0604dd4cbdca96", 
        "appointmentDate": "2024-05-15"
    }
```

