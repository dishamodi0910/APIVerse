# IIT ISM Subjects API Documentation

This API provides endpoints to retrieve information about subjects offered at IIT ISM Dhanbad.

## Usage

This API can be used in various scenarios such as:
- Retrieving the timetable for all subjects to display on a student portal or mobile app.
- Getting information about a specific subject to display course details on a IITISM website.
- Filtering subjects by semester, department, or subject type to aid in course selection for ISM students.


Base URL: http://localhost:3000

## Get timetable of all the subjects

**GET** `http://localhost:3000/timeTable/allCourses`

Retrieves the timetable of all subjects.

## Get timetable of a particular subject

**GET** `http://localhost:3000/timeTable/courseCode/:courseCode`

Retrieves the timetable of a specific subject identified by its course code.

- **Expected Course_code Format**: The course code should consist of the first three characters [A-Z] followed by the next three characters [100-599].

## Get all subjects names

**GET** `http://localhost:3000/subject/allSubjectNames`

Retrieves the names of all subjects.

## Get all information of a particular subject

**GET** `http://localhost:3000/subject/courseCode/:courseCode`

Retrieves all information about a specific subject identified by its course code.

- **Expected Course_code Format**: The course code should consist of the first three characters [A-Z] followed by the next three characters [100-599].

## Get all subjects of monsoon/winter semester

**GET** `http://localhost:3000/subject/semester/:type`

Retrieves all subjects offered in the monsoon or winter semester.

- **Expected Semester Types**: The semester type should be specified as `monsoon` or `winter`.

## Get all subjects of a particular department

**GET** `http://localhost:3000/subject/departmentName/:departmentName`

Retrieves all subjects offered by a specific department.

- **Allowed Filters**: You can filter subjects by department names such as {CSE, EE, ECE, CVE, CE, PHY, ESE, FME, ESE, PE}.

## Get all subjects of a particular subject type

**GET** `http://localhost:3000/subjectType/:subjectType`

Retrieves all subjects of a specific subject type.

- **Expected subject types**: DE (Department Elective), OE (Open Elective), DC (Department Core), IC (Institute Core).

## Gets instructor name of a particular subject

**GET** `http://localhost:3000/instructor/courseCode/:courseCode`

Retrieves the name of the instructor teaching a specific subject identified by its course code.

- **Expected Course_code Format**: The course code should consist of the first three characters [A-Z] followed by the next three characters [100-599].


## Additional Notes

- Ensure that the expected course codes are formatted correctly when making requests to the API.
- Use the allowed filters for department names and subject types to narrow down search results effectively.
