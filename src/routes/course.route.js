import express from "express";
import CourseController from "../controller/course.controller.js";
const couresRouter = express.Router();
const courseController = new CourseController()
// API Courses
couresRouter.get("/:id", courseController.getCourseById);

couresRouter.get("/", courseController.getAllCourse);

couresRouter.post("/", courseController.createCourse);

couresRouter.delete("/:id", courseController.deleteCourse);

couresRouter.put("/:id", courseController.editCourse);

export default couresRouter;
