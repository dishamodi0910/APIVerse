import { atom } from "recoil";

export const sortAtom = atom({
  key: "sortAtom",
  default: 0,
});

// store all reviews

export const reviewsAtom = atom({
  key: "reviewsAtom",
  default: [],
});

export const reviewsOverallAtom = atom({
  key: "reviewsOverallAtom",
  default: [],
});

export const reviewsGradesAtom = atom({
  key: "reviewsGradesAtom",
  default: [],
});

export const reviewsAttendanceAtom = atom({
  key: "reviewsAttendanceAtom",
  default: [],
});

export const reviewsQualityAtom = atom({
  key: "reviewsQualityAtom",
  default: [],
});

export const courseAtom = atom({
  key: "courseAtom",
  default: [],
});
// departments

export const departmentsAtom = atom({
  key: "departmentsAtom",
  default: [],
});

export const deptSubjectsAtom = atom({
  key: "deptSubjectsAtom",
  default: {},
});

export const alreadyAddedReviewAtom = atom({
  key: "alreadyAddedReviewAtom",
  default: false,
});

export const addingReviewAtom = atom({
  key: "addingReviewAtom",
  default: false,
});

export const courseCodeAtom = atom({
  key: "courseCodeAtom",
  default: null,
});

export const departmentIdAtom = atom({
  key: "departmentIdAtom",
  default: null,
});

// core logic state

export const usernameAtom = atom({
  key: "usernameAtom",
  default: "notallowed",
});

export const loadingAtom = atom({
  key: "loadingAtom",
  default: false,
});

export const reviewIndexAtom = atom({
  key: "reviewIndexAtom",
  default: 0,
});

export const widthAtom = atom({
  key: "widthAtom",
  default: 0,
});

///////// admin

export const adminUserAtom = atom({
  key: "adminUserAtom",
  default: "notallowed",
});

export const adminWorkAtom = atom({
  key: "adminWorkAtom",
  default: 0,
});

// export const pageAtom = atom({
//   key: "pageAtom",
//   default: "home",
// });

export const userDataAtom = atom({
  key: "userDataAtom",
  default: [],
});

export const showAddReviewButtonAtom = atom({
  key: "showAddReviewButtonAtom",
  default: null,
});
