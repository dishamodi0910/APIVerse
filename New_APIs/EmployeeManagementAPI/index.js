import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import employeeRouter from './routes/employees.routes.js';
import departmentRouter from './routes/departments.routes.js';
import projectRouter from './routes/projects.routes.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/employees", employeeRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/projects", projectRouter);


app.use("*", (req, res) =>
    res.status(404).json({ error: "Route does not exist" })
);

const port = process.env.PORT || 4000
mongoose
  .connect(process.env.DB_URI)
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