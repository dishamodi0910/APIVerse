import express from "express";
import data from "../assets/course_info.js";

const instructorRouter = express.Router();

//gets instructors of all the courses

instructorRouter.get("/allCourses", async (req, res) => {
  const returnData = data.map((course) => ({
    code: course.code,
    name: course.name,
    instructor: course.instructor,
  }));
  return res.status(200).json({
    success: true,
    message: "Extracted all instructor names successfully",
    instructorData: returnData,
  });
});

//gets instructors of a particular course
instructorRouter.get("/:courseCode", async (req, res) => {
  const returnData = data
    .filter((course) => course.code === req.params.courseCode)
    .map((course) => ({
      name: course.name,
      code: course.code,
      instructor: course.instructor,
    }));
  return res.status(200).json({
    success: true,
    message: "Extracted all timetables successfully",
    instructorData: returnData,
  });
});

export default instructorRouter;
