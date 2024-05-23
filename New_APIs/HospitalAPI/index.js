import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import patientRouter from './routes/patients.routes.js';
import doctorRouter from './routes/doctors.routes.js';
import appointmentRouter from './routes/appointments.routes.js';
import specialityRouter from './routes/specialities.routes.js';



dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/patients", patientRouter);
app.use("/api/doctors", doctorRouter);
app.use("/api/appointments", appointmentRouter);
app.use("/api/specialities", specialityRouter)
app.use("*", (req, res) =>
    res.status(404).json({ error: "Route does not exist" })
);

const port = process.env.PORT || 4000
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    //Only listen to port when database is connected.
    console.log(`Connected to MongoDB`);
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });