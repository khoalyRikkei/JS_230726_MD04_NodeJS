
import { MSG_COMMON } from "../messages/index.js";
import CourseService from "../service/course.service.js";

const courseService = new CourseService();

class CourseController {
  async getAllCourse(req, res, next) {
    try {
      const ret = await courseService.getCourse();
      res.status(200).json(ret);
    } catch (error) {
      next(error);
    }
  }

  async getCourseById(req, res, next) {
    try {
      const courseId = req.params.id;
      const courseData = await courseService.getCourseById(courseId);
      if (courseData) {
        res.status(200).json(courseData);
      } else {
        res
          .status(404)
          .json({ message: MSG_COMMON.MSG_ERROR.NotFoundException });
      }
    } catch (error) {
      next(error);
    }
  }

  async createCourse(req, res, next) {
    const courseData = req.body;
    console.log(111111),courseData;
    try {
      const ret = await courseService.createCourse(courseData);
      res
        .status(201)
        .json({ message: MSG_COMMON.MSG_SUCCESS.create("Course") });
    } catch (error) {
      next(error);
    }
  }

  async deleteCourse(req, res, next) {
    try {
      const courseId = req.params.id;
      const deletedCourse = await courseService.deleteCourse(courseId);
      if (deletedCourse) {
        res
          .status(200)
          .json({ message: MSG_COMMON.MSG_SUCCESS.delete("Course") });
      } else {
        res
          .status(404)
          .json({ message: MSG_COMMON.MSG_ERROR.NotFoundException });
      }
    } catch (error) {
      next(error);
    }
  }

  async editCourse(req, res, next) {
    const courseId = req.params.id;
    const updatedData = req.body;
    try {
      const ret = await courseService.editCourse(courseId, updatedData);
      res
        .status(200)
        .json({ message: MSG_COMMON.MSG_SUCCESS.update("Course") });
    } catch (error) {
      next(error);
    }
  }
}

export default CourseController;
