import LessonRepository from "../repository/lesson.repositpry.js";

const lessonRepository = new LessonRepository();

export default class LessonService {
  async getLesson() {
    try {
      const data = await lessonRepository.getLesson();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getLessonById(id) {
    try {
      const lessonById = await lessonRepository.getLessonById(id);
      return lessonById;
    } catch (error) {
      throw error;
    }
  }

  async createLesson(item) {
    try {
      const data = await lessonRepository.createLesson(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteLesson(id) {
    try {
      const data = await lessonRepository.deleteLesson(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async editLesson(id, item) {
    try {
      const data = await lessonRepository.editLesson(id, item);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
