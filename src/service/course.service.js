import CourseRepository from "../repository/course.repository.js";


const courseRepository = new CourseRepository();

export default class CourseService {
  async getCourse() {
    try {
      const data = await courseRepository.getCourse();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCourseById(id) {
    try {
      const courseById = await courseRepository.getCourseById(id);
      return courseById;
    } catch (error) {
      throw error;
    }
  }

  async createCourse(item) {
    try {
      const data = await courseRepository.createCourse(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id) {
    try {
      const data = await courseRepository.deleteCourse(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  editCourse(id, item) {
    try {
      const data = courseRepository.editCourse(id, item);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
