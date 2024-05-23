import mongoose from "mongoose";
import Patient from "./models/patient.js";
import Doctor from "./models/doctor.js";
import Speciality from "./models/speciality.js";
import dotenv from 'dotenv';


dotenv.config();
mongoose
    .connect(process.env.DBURL)
    .then(() => {
        //Only listen to port when database is connected.
        console.log(`Connected to MongoDB`);
    })
    .catch((error) => {
        console.log(error);
    });

const specialities = [
    { name: "Cardiology" },
    { name: "Neurology" },
    { name: "Pediatrics" },
    { name: "Orthopedics" },
    { name: "Gastroenterology" }
];


const doctors = [
    {
        name: "John Doe",
        speciality: "Cardiology",
        gender: "Male",
        phone: "4444444444"
    },
    {
        name: "Bob Smith",
        speciality: "Neurology",
        gender: "Male",
        phone: "5555555555"
    },
    {
        name: "Alice Johnson",
        speciality: "Orthopedics",
        gender: "Female",
        phone: "7777777777"
    }
]


const patients =
    [
        {
            name: "John Smith",
            dateOfBirth: new Date("2000-08-24"),
            gender: "Male",
            phone: "1111111111",
            address: "Mumbai, Maharashtra",
            registrationDate: new Date()
        },
        {
            name: "James English",
            dateOfBirth: new Date("2002-11-15"),
            gender: "Male",
            phone: "2222222222",
            address: "Kolkata, West Bengal",
            registrationDate: new Date()
        },
        {
            name: "Alice Wallace",
            dateOfBirth: new Date("2004-02-10"),
            gender: "Female",
            phone: "3333333333",
            address: "Delhi",
            registrationDate: new Date()
        }
    ];

const insertSeedData = async () => {
    try {

        await Speciality.deleteMany();
        await Doctor.deleteMany();
        await Patient.deleteMany();

        const insertedSpecialities = await Speciality.insertMany(specialities);
        // console.log(insertedSpecialities);
        const specialityMap = insertedSpecialities.reduce((map, speciality) => {
            map[speciality.name] = speciality._id;
            return map;
        }, {});
        // console.log(specialityMap);

        const doctorsWithSpecialityIds = doctors.map(doctor => ({
            ...doctor,
            speciality: specialityMap[doctor.speciality]
        }));
        // console.log(doctorsWithSpecialityIds)
        await Doctor.insertMany(doctorsWithSpecialityIds);
        await Patient.insertMany(patients);
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.disconnect();
    }
};



insertSeedData();