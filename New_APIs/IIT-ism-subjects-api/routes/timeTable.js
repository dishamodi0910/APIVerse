import express from "express";
import data from "../assets/course_info.js"

const timeTableRouter = express.Router();

const extractTimetable = (courses) => {
  const timetable = [];
  courses.forEach((course) => {
    const { code, name, timetable: courseTimetable } = course;
    courseTimetable.forEach((slot) => {
      timetable.push({
        code,
        name,
        day: slot[0],
        time: slot[1],
        room: slot[2],
      });
    });
  });
  return timetable;
};

//gets timetable of all courses 
timeTableRouter.get("/allCourses", async (req, res) => {
    const returnData = extractTimetable(data);
    return res.status(200).json({
        success: true,
        message: "Extracted all timetables successfully",
        timeTable: returnData
    });
})

//gets timetable of a particular course 
timeTableRouter.get("/courseCode/:courseCode", async (req, res) => {
    const returnData = data
      .filter((course) => course.code === req.params.courseCode)
      .map((course) => course.timetable);
    return res.status(200).json({
      success: true,
      message: "Extracted all timetables successfully",
      timeTable: returnData,
    });
})

export default timeTableRouter;