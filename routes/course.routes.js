const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require("../controllers/course.controller.js");
const { verifyToken, isTeacher } = require("../middleware/auth.middleware.js");

module.exports = app => {
    app.get("/courses", verifyToken, getAllCourses);
    app.get("/courses/:id", verifyToken, getCourseById);
    app.post("/courses", [verifyToken, isTeacher], createCourse);
    app.put("/courses/:id", [verifyToken, isTeacher], updateCourse);
    app.delete("/courses/:id", [verifyToken, isTeacher], deleteCourse);
};
