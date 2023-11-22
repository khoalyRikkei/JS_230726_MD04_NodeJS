import { getData, insertData, deleteData, editData, getDataById} from "../../utils/data.util.js";
import Lesson from "../models/lesson.model.js";

export default class LessonRepository {
  async getLesson() {
    try {
      const lessonData = await getData(Lesson);
      return lessonData;
    } catch (error) {
      throw error;
    }
  }
  async getLessonById(id) {
    try {
      const lessonById = await getDataById(Lesson, id);
      return lessonById;
    } catch (error) {
      throw error;
    }
  }
  async createLesson(data) {
    try {
      const newLesson = await insertData(Lesson, data);
      return newLesson;
    } catch (error) {
      throw error;
    }
  }

  async deleteLesson(id) {
    try {
      const deleteLesson = await deleteData(Lesson, id);
      return deleteLesson;
    } catch (error) {
      throw error;
    }
  }
  async editLesson(id, item) {
   try {
    const editLesson = await editData(Lesson, id, item);
    return editLesson;
   } catch (error) {
    throw error;
   }
  }
}
