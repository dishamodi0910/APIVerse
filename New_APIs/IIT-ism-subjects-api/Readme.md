

# IIT ISM Subjects API Documantation

base_url= http://localhost:3000

## Get timetable of all the subjects

Example Request

**GET** `http://localhost:3000/timeTable/allCourses`


Example Response

```
{
  "success": true,
  "message": "Extracted all timetables successfully",
  "timeTable": [
    {
      "code": "CHD401",
      "name": "Petrochemical Technology",
      "day": "Monday",
      "time": "10:00-10:50",
      "room": "CHE-401"
    },
    {
      "code": "CHD401",
      "name": "Petrochemical Technology",
      "day": "Monday",
      "time": "09:00-09:50",
      "room": "CHE-401"
    }
}
```



## Get timetable of a particular subject

**GET** `http://localhost:3000/timeTable/courseCode/:courseCode`

*Expected Course_code : First three characters [A-Z] next three [100-599]*

Example Response

``` 
{
  "success": true,
  "message": "Extracted all timetables successfully",
  "timeTable": [
    [
      [
        "Monday",
        "10:00-10:50",
        "CHE-401"
      ],
      [
        "Monday",
        "09:00-09:50",
        "CHE-401"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CHE-401"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CHE-401"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "CHE-401"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CHE-401"
      ]
    ]
  ]
}
```


## Get all subjects names


**GET** `http://localhost:3000/subject/allSubjectNames`

Example Response

```
{
  "success": true,
  "message": "Extracted all subject names successfully",
  "allSubjectNames": [
    {
      "id": 0,
      "name": "MS CHD401 - Petrochemical Technology"
    },
    {
      "id": 1,
      "name": "MS CHD408 - Process Data Analytics"
    }
}
```

## Get all information of a particular subject


**GET** `http://localhost:3000/subject/courseCode/:courseCode`

*Expected Course_code : First three characters [A-Z] next three [100-599]*

Example Response

```
{
  "success": true,
  "message": "Extracted all info of subject successfully",
  "subjectData": [
    {
      "id": 0,
      "code": "CHD401",
      "name": "Petrochemical Technology",
      "instructor": "Paidinaidu Paluri",
      "department": "Chemical Engineering",
      "type": "Department Elective (DE)",
      "link": "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ce/CHD401.pdf",
      "credits": "3-0-0",
      "timetable": [
        [
          "Monday",
          "10:00-10:50",
          "CHE-401"
        ],
        [
          "Monday",
          "09:00-09:50",
          "CHE-401"
        ],
        [
          "Tuesday",
          "11:00-11:50",
          "CHE-401"
        ],
        [
          "Wednesday",
          "11:00-11:50",
          "CHE-401"
        ],
        [
          "Wednesday",
          "09:00-09:50",
          "CHE-401"
        ],
        [
          "Friday",
          "10:00-10:50",
          "CHE-401"
        ]
      ],
      "semester": "MS"
    }
  ]
}
```

## Get all subjects of monsoon/winter semester


**GET** `http://localhost:3000/subject/semester/:type`

Example Response

```
{
  "success": true,
  "message": "Extracted all subject of monsoon successfully",
  "allSubjectNames": [
    {
      "id": 0,
      "name": "MS CHD401 - Petrochemical Technology"
    },
    {
      "id": 1,
      "name": "MS CHD408 - Process Data Analytics"
    }
}
```

## Get all subjects of a particular department 


**GET** `http://localhost:3000/subject//departmentName/:departmentName`

*Allowed Filters:  {CSE,EE,ECE,CVE,CE,PHY,ESE,FME,ESE,PE}*

Example Response

```
{
  "success": true,
  "message": "Extracted all info of subject successfully",
  "subjectData": [
    {
      "id": 0,
      "code": "CHD401",
      "name": "Petrochemical Technology",
      "instructor": "Paidinaidu Paluri",
      "department": "Chemical Engineering",
      "type": "Department Elective (DE)",
      "link": "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ce/CHD401.pdf",
      "credits": "3-0-0",
      "timetable": [
        [
          "Monday",
          "10:00-10:50",
          "CHE-401"
        ],
        [
          "Monday",
          "09:00-09:50",
          "CHE-401"
        ],
        [
          "Tuesday",
          "11:00-11:50",
          "CHE-401"
        ],
        [
          "Wednesday",
          "11:00-11:50",
          "CHE-401"
        ],
        [
          "Wednesday",
          "09:00-09:50",
          "CHE-401"
        ],
        [
          "Friday",
          "10:00-10:50",
          "CHE-401"
        ]
      ],
      "semester": "MS"
}
```

## Get all subjects of a particular subject type


**GET** `http://localhost:3000/subjectType/:subjectType`

*Expected subject type DE,OE,DC,IC*


Example Response

```
   {
      "id": 324,
      "code": "CHC305",
      "name": "Mass Transfer Lab",
      "instructor": "Suman Dutta,Paidinaidu Paluri",
      "department": "Chemical Engineering",
      "type": "Department Compulsory (DC)",
      "link": "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ce/CHC305.pdf",
      "credits": "0-0-3",
      "timetable": [],
      "semester": "MS"
    },

```


## Check instructor name for all the subjects 
**GET** `http://localhost:3000/instructor/allCourses`


Example Response

```
{
  "success": true,
  "message": "Extracted all instructor names successfully",
  "instructorData": [
    {
      "code": "CHD401",
      "name": "Petrochemical Technology",
      "instructor": "Paidinaidu Paluri"
    },
    {
      "code": "CHD408",
      "name": "Process Data Analytics",
      "instructor": "Pantula Devi Priyanka"
    },
    {
      "code": "CHD411",
      "name": "Catalytic Reaction Engineering",
      "instructor": "Lutukurthi D N V V Konda"
    },
    {
      "code": "CHO401",
      "name": "Process Integration",
      "instructor": "Soumyajit Sen Gupta"
    },
    {
      "code": "CHO402",
      "name": "Biofuels & Biomass Conversion Technology",
      "instructor": "Ejaz Ahmad"
    },
    {
      "code": "CSD404",
      "name": "Computer Graphics",
      "instructor": "Sushanta Mukhopadhyay"
    },

```

## Gets instructor name of a particular subject 

**GET** `http://localhost:3000/instructor/courseCode/:courseCode`


Example Response

```
{
  "success": true,
  "message": "Extracted all timetables successfully",
  "instructorData": [
    {
      "name": "Petrochemical Technology",
      "code": "CHD401",
      "instructor": "Paidinaidu Paluri"
    }
  ]
}
```