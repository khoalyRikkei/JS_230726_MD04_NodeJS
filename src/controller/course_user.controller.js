import { MSG_COMMON } from "../messages/index.js";
import CourseUserService from "../service/course_user.service.js";

const courseUserService = new CourseUserService();

export default class CourseUserController {

    async getAllCourseUser(req, res, next) {
        try {
            const ret = await courseUserService.getCourseUser();
            if (ret) {
                res.status(200).json(ret);
            } else {
                res
                    .status(404)
                    .json({ message: MSG_COMMON.MSG_FAILURE.read("Course User") });
            }
        } catch (error) {
            next(error);
        }
    }



    async getCourseUserById(req, res, next) {
        try {
            const courseId = req.query;
            const courseData = await courseUserService.getCourseUserById(courseId);
            if (courseData) {
                res.status(200).json(courseData);
            } else {
                res
                    .status(404)
                    .json({ message: MSG_COMMON.MSG_FAILURE.read("Course User") });
            }
        } catch (error) {
            next(error);
        }
    }

    async createCourseUser(req, res, next) {
        const courseData = req.body;
        const updatedCourseData = {
            ...courseData,
        };

        try {
            const ret = await courseUserService.createCourseUser(updatedCourseData);
            if (ret) {
                res
                    .status(201)
                    .json({ message: MSG_COMMON.MSG_SUCCESS.create("Course User") });
            } else {
                res
                    .status(404)
                    .json({ message: MSG_COMMON.MSG_FAILURE.create("Course User") });
            }
        } catch (error) {
            next(error);
        }
    }
}