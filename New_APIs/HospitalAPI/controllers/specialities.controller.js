import Speciality from "../models/speciality.js";

export default class SpecialityController {
    static async getAllSpecialities(req, res, next) {
        try {
            const response = await Speciality.find();
            if (response.length === 0) {
                res.status(404).send({ error: "No specialities found" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async getSpecialityById(req, res, next) {
        const { specialityId } = req.params;
        try {
            const response = await Speciality.findById(specialityId);
            if (!response) {
                return res.status(404).send({ error: "Speciality not found!" })
            }
        } catch (err) {
            console.log(err);
        }
    }
    static async addSpeciality(req, res, next) {
        const { name } = req.body;
        const speciality = new Speciality({name: name});
        try {
            const response = await speciality.save();
            res.status(201).json(response);
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: err });
        }
    }
    static async updateSpecialityById(req, res, next) {
        const { specialityId } = req.params;
        const { name } = req.body;
        const updatedInfo = {};
        if(name) updatedInfo.name = name;
        try {
            const response = await Speciality.findByIdAndUpdate(specialityId, updatedInfo, {runValidators: true, new: true});
            if (!response) {
                return res.status(404).send({ error: "Speciality not found!" })
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async deleteSpecialityById(req, res, next) {
        const { specialityId } = req.params;
        try {
            const response = await Speciality.findByIdAndDelete(specialityId);
            if (!response) {
                return res.status(404).send({ error: "Speciality not found!" })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
}