import express from "express";
import CourseController from "../controller/course.controller.js";
const couresRouter = express.Router();
const courseController = new CourseController()
// API Courses
couresRouter.get("/search", courseController.searchCourseByCondition);

couresRouter.get("/trash", courseController.getAllDeletedCourse);

couresRouter.get("/trash/:id", courseController.getDeletedCourseById);

couresRouter.get("/", courseController.getAllCourse);

couresRouter.get("/:id", courseController.getCourseById);

couresRouter.delete("/:id", courseController.softDeleteCourse);

couresRouter.delete("/del-forever", courseController.deleteCourse);

couresRouter.put("/restore", courseController.restoreCategory);

couresRouter.put("/:id", courseController.editCourse);

couresRouter.post("/", courseController.createCourse);

export default couresRouter;
