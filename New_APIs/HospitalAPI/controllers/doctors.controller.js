import Doctor from "../models/doctor.js";
import Speciality from "../models/speciality.js";

export default class DoctorController {
    static async addDoctor(req, res, next) {
        const { name, phone, gender, specialityId } = req.body;
        const spec = await Speciality.findById(specialityId);
        if (!spec) {
            return res.status(404).send({ error: "Invalid Speciality" })
        }
        const doctor = new Doctor({
            name: name,
            speciality: specialityId,
            gender: gender,
            phone: phone,
        })
        try {
            const response = await doctor.save();
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    static async getAllDoctors(req, res, next) {
        try {
            const response = await Doctor.find().populate('speciality');
            if (response.length === 0) {
                return res.status(404).send({ error: "No doctors found" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async getDoctorById(req, res, next) {
        const { doctorId } = req.params;
        try {
            const response = await Doctor.findById(doctorId).populate('speciality');
            if (!response) {
                return res.status(404).send({ error: "Doctor not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async updateDoctorById(req, res, next) {
        const { doctorId } = req.params;
        const { name, phone, gender, specialityId } = req.body;
        const updatedInfo = {};
        if (name) updatedInfo.name = name;
        if (phone) updatedInfo.phone = phone;
        if (gender) updatedInfo.gender = gender;
        if (specialityId) updatedInfo.speciality = specialityId;
        const spec = await Speciality.findById(specialityId);
        if (!spec) {
            return res.status(404).send({ error: "Invalid Speciality" })
        }
        try {
            const response = await Doctor.findByIdAndUpdate(doctorId, updatedInfo, { runValidators: true, new: true });
            if (!response) {
                return res.status(404).send({ error: "Doctor not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async deleteDoctorById(req, res, next) {
        const { doctorId } = req.params;
        try {
            const response = await Doctor.findByIdAndDelete(doctorId);
            if (!response) {
                return res.status(404).send({ error: "Doctor not found!" })
            }
            res.status(200).json({ message: "Doctor Deleted Sucessfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
}