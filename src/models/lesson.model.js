// Trong file lesson.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.config.js';
import Course from './course.model.js';


const Lesson = sequelize.define('lessons', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  exercise: {
    type: DataTypes.BLOB, 
  },
  lesson_img: {
    type: DataTypes.STRING,
  },
  video: {
    type: DataTypes.STRING,
  },
  courses_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


export default Lesson;
