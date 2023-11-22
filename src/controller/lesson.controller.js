
import { MSG_COMMON } from "../messages/index.js";

import LessonService from "../service/lesson.service.js";

const lessonService = new LessonService();

class LessonController {
  async getAllLesson(req, res, next) {
    try {
      const ret = await lessonService.getLesson();
      res.status(200).json(ret);
    } catch (error) {
      next(error);
    }
  }

  async getLessonById(req, res, next) {
    try {
      const lessonId = req.params.id;
      const lessonData = await lessonService.getLessonById(lessonId);
      if (lessonData) {
        res.status(200).json(lessonData);
      } else {
        res
          .status(404)
          .json({ message: MSG_COMMON.MSG_ERROR.NotFoundException });
      }
    } catch (error) {
      next(error);
    }
  }

  async createLesson(req, res, next) {
    const lessonData = req.body;
    try {
      const ret = await lessonService.createLesson(lessonData);
      res
        .status(201)
        .json({ message: MSG_COMMON.MSG_SUCCESS.create("Lesson"),ret });
    } catch (error) {
      next(error);
    }
  }

  async deleteLesson(req, res, next) {
    try {
      const lessonId = req.params.id;
      const deletedLesson = await lessonService.deleteLesson(lessonId);
      if (deletedLesson) {
        res
          .status(200)
          .json({ message: MSG_COMMON.MSG_SUCCESS.delete("Lesson") });
      } else {
        res
          .status(404)
          .json({ message: MSG_COMMON.MSG_ERROR.NotFoundException });
      }
    } catch (error) {
      next(error);
    }
  }

  async editLesson(req, res, next) {
    const lessonId = req.params.id;
    const updatedData = req.body;
    try {
      const ret = await lessonService.editLesson(lessonId, updatedData);
      res
        .status(200)
        .json({ message: MSG_COMMON.MSG_SUCCESS.update("Lesson"),ret });
    } catch (error) {
      next(error);
    }
  }
}
export default LessonController;
