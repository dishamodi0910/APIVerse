import Appointment from "../models/appointment.js";
import Bill from "../models/bill.js"
import Doctor from "../models/doctor.js";
import Patient from "../models/patient.js";

export default class AppointmentController {
    static async addAppointment(req, res, next) {
        const { doctorId, patientId, appointmentDate } = req.body;
        const patient = await Patient.findById(patientId);
        const doctor = await Doctor.findById(doctorId);
        console.log(patient);
        console.log(doctor);
        if(!patient || !doctor){
            return res.status(404).send({ error: "Patient or Doctor not found" })
        }
        const appointment = new Appointment({
            doctor: doctorId,
            patient: patientId,
            appointmentDate: appointmentDate
        });
        try {
            const response = await appointment.save();
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

    static async getAllAppointments(req, res, next) {
        try {
            const response = await Appointment.find().populate('doctor').populate('patient');
            if (response.length === 0) {
                return res.status(404).send({ error: "No appointments found" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async getAppointmentById(req, res, next) {
        const { appointmentId } = req.params;
        try {
            const response = await Appointment.findById(appointmentId).populate('doctor').populate('patient');
            if (!response) {
                return res.status(404).send({ error: "Appointment not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }
    static async updateAppointmentById(req, res, next) {
        const { appointmentId } = req.params;
        const { appointmentDate, status } = req.body;
        const updatedInfo = {};
        if (appointmentDate) updatedInfo.appointmentDate = appointmentDate;
        if (status) updatedInfo.status = status;

        try {
            const response = await Appointment.findByIdAndUpdate(appointmentId, updatedInfo, { runValidators: true, new: true });
            if (!response) {
                return res.status(404).send({ error: "Appointment not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    static async deleteAppointmentById(req, res, next) {
        const { appointmentId } = req.params;
        try {
            const response = await Appointment.findByIdAndDelete(appointmentId);
            if (!response) {
                return res.status(404).send({ error: "Appointment not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    static async addAppointmentBill(req, res, next) {
        const { appointmentId } = req.params;
        const { amount } = req.body;
        const appointment = await Appointment.findById(appointmentId);
        if (appointment !== null && appointment.status == 'Completed') {
            const bill = new Bill({
                appointment: appointmentId,
                amount: amount
            })
            try {
                const response = await bill.save();
                res.status(201).json(response);
            } catch (err) {
                res.status(400).json({ message: err });
            }
        }
        else {
            res.status(400).json({ message: "Appointment not completed" });
        }
    }

    static async getAppointmentBill(req, res, next) {
        const { appointmentId } = req.params;
        try {
            const response = await Bill.findOne({ appointment: appointmentId }).populate('appointment');
            if (!response) {
                return res.status(404).send({ error: "Bill not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    static async updateAppointmentBill(req, res, next) {
        const { appointmentId } = req.params;
        const { amount } = req.body;
        const { status } = req.body;
        const updatedInfo = {};
        if (amount) updatedInfo.amount = amount
        if (status) updatedInfo.status = status
        try {
            const response = await Bill.findOneAndUpdate({ appointment: appointmentId }, updatedInfo, { runValidators: true, new: true });
            if (!response) {
                return res.status(404).send({ error: "Bill not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    static async deleteAppointmentBill(req, res, next) {
        const { appointmentId } = req.params;
        try {
            const response = await Bill.findOneAndDelete({ appointment: appointmentId });
            if (!response) {
                return res.status(404).send({ error: "Bill not found!" })
            }
            res.status(200).json({ message: "Bill Deleted Sucessfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

}