import {
    getData,
    editData,
    getDataById,
    insertMultipleData,
    insertData
} from "../../utils/data.util.js";
import LessonUserView from "../models/lesson_user_view.model.js";
import Lesson_User from "../models/lessons_user.model.js";

export default class LessonUserRepository {
    async getLessonUser() {
        try {
            const lessonData = await getData(LessonUserView);
            return lessonData;
        } catch (error) {
            throw error;
        }
    }

    async getLessonUserById(id) {
        try {
            const lessonById = await getDataById(LessonUserView, id);
            return lessonById;
        } catch (error) {
            throw error;
        }
    }

    async editLessonUser(id,data) {
        try {
            const newLesson = await editData(Lesson_User, id, data);
            return newLesson;
        } catch (error) {
            throw error;
        }
    }

    async createLessonUserDataArray(dataArray) {
        try {
          const newPayment = await insertMultipleData(Lesson_User, dataArray);
          return newPayment;
        } catch (error) {
          throw error;
        }
      }

      async createLessonUser(data) {
        try {
          const newPayment = await insertData(Lesson_User, data);
          return newPayment;
        } catch (error) {
          throw error;
        }
      }
}
