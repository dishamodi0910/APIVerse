import express from "express";
import data from "../assets/course_info.js";
import subject from "../assets/course_names.js";

const departmentMapping = {
  CE: "Chemical Engineering",
  CVE: "Civil Engineering",
  CSE: "Computer Science and Engineering",
  EE: "Electrical Engineering",
  ECE: "Electronics Engineering",
  ESE: "Environmental Science & Engineering",
  FME: "Fuel Mineral & Metallurgical Engineering",
  ME: "Mining Engineering",
  ESE: "Mechanical Engineering",
  PE: "Petroleum Engineering",
  PHY: "Physics",
};

const typeMapping = {
  DE: "Department Elective (DE)",
  OE: "Open Elective (OE)",
  DC: "Department Compulsory (DC)",
  ESO: "ESO",
  IC: "Institute Core (IC)",
};
const subjectRouter = express.Router();

//gets all subjects names of all departmentns 
subjectRouter.get("/allSubjectNames", async (req, res) => {
  const returnData = subject;
  return res.status(200).json({
    success: true,
    message: "Extracted all subject names successfully",
    allSubjectNames: returnData,
  });
});

//gets all info about a particualr course
subjectRouter.get("/courseCode/:courseCode", async (req, res) => {
  const returnData = data.filter(
    (course) => course.code === req.params.courseCode
  );
  return res.status(200).json({
    success: true,
    message: "Extracted all info of subject successfully",
    subjectData: returnData,
  });
});

//gets all courses of a particular semester type
subjectRouter.get("/semester/:type", async (req, res) => {
  const type = req.params.type;
  var returnData = [];
  if (type == "monsoon") {
    returnData = data.filter((course) => course.semester == "MS");
  } else {
    returnData = data.filter((course) => course.semester == "WS");
  }
  return res.status(200).json({
    success: true,
    message: "Extracted all info of subject successfully",
    subjectData: returnData,
  });
});

//gets all courses of a particular department 
subjectRouter.get("/departmentName/:departmentName", async (req, res) => {
  const departmentName = req.params.departmentName;
  const returnData = data.filter(
    (course) => course.department == departmentMapping[departmentName]
  );
  return res.status(200).json({
    success: true,
    message: "Extracted all info of subject successfully",
    subjectData: returnData,
  });
});

//gets all coures of a particular course type 
subjectRouter.get("/subjectType/:subjectType", async (req, res) => {
    const subjectType = req.params.subjectType;
    const returnData = data.filter(
        (course) => course.type = typeMapping[subjectType]
    );
    return res.status(200).json({
      success: true,
      message: "Extracted all info of subject successfully",
      subjectData: returnData,
    });
});

export default subjectRouter;
