import express from "express";
import dotenv from "dotenv";
import timeTableRouter from "./routes/timeTable.js";
import instructorRouter from "./routes/instructor.js";
import subjectRouter from "./routes/subjects.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server healthy no worries"
    });
});
app.use("/timetable", timeTableRouter); 
app.use("/subject",subjectRouter);
app.use("/instructor", instructorRouter);

// Start the server
app.listen(port);
