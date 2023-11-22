import express from "express";
import LessonController from "../controller/lesson.controller.js";
const lessonRouter = express.Router();
const lessonController = new LessonController()

// API Lessons
lessonRouter.get("/:id", lessonController.getLessonById);

lessonRouter.get("/", lessonController.getAllLesson);

lessonRouter.post("/", lessonController.createLesson);

lessonRouter.delete("/:id", lessonController.deleteLesson);

lessonRouter.put("/:id", lessonController.editLesson);

export default lessonRouter;
