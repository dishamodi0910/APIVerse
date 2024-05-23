import Patient from "../models/patient.js";
import Appointment from "../models/appointment.js";

export default class PatientController {
    static async addPatient(req, res, next) {
        const { name, dateOfBirth, phone, address, gender } = req.body;
        const patient = new Patient({
            name: name,
            dateOfBirth: dateOfBirth,
            gender: gender,
            phone: phone,
            address: address
        })
        try {
            const response = await patient.save();
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }
    static async getAllPatients(req, res, next) {
        try {
            const response = await Patient.find();
            if (response.length === 0) {
                return res.status(404).send({ error: "No patients found" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async getPatientById(req, res, next) {
        const { patientId } = req.params;
        try {
            const response = await Patient.findById(patientId);
            if (!response) {
                return res.status(404).send({ error: "Patient not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async updatePatientById(req, res, next) {
        const { patientId } = req.params;
        const { name, dateOfBirth, phone, address, gender } = req.body;
        const updatedInfo = {};
        if (name) updatedInfo.name = name;
        if (dateOfBirth) updatedInfo.dateOfBirth = dateOfBirth;
        if (phone) updatedInfo.phone = phone;
        if (address) updatedInfo.address = address;
        if (gender) updatedInfo.gender = gender;
        try {
            const response = await Patient.findByIdAndUpdate(patientId, updatedInfo, { runValidators: true, new: true });
            if (!response) {
                return res.status(404).send({ error: "Patient not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async deletePatientById(req, res, next) {
        const { patientId } = req.params;
        try {
            const response = await Patient.findByIdAndDelete(patientId);
            if (!response) {
                return res.status(404).send({ error: "Patient not found!" });
            }
            res.status(200).json({ message: "Patient Deleted Sucessfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }


}