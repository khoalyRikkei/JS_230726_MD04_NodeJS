import { getData, insertData, deleteData, editData, getDataById} from "../../utils/data.util.js";
import Course from "../models/course.model.js";

export default class CourseRepository {
  async getCourse() {
    try {
      const courseData = await getData(Course);
      return courseData;
    } catch (error) {
      throw error;
    }
  }
  async getCourseById(id) {
    try {
      const courseById = await getDataById(Course, id);
      return courseById;
    } catch (error) {
      throw error;
    }
  }
  async createCourse(data) {
    try {
      const newCourse = await insertData(Course, data);
      return newCourse;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id) {
    try {
      const deleteCourse = await deleteData(Course, id);
      return deleteCourse;
    } catch (error) {
      throw error;
    }
  }
  async editCourse(id, item) {
   try {
    const editCourse = await editData(Course, id, item);
    return editCourse;
   } catch (error) {
    throw error;
   }
  }
}
