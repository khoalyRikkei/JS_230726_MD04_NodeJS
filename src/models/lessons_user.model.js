import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.config.js';

const Lessons_User = sequelize.define('lessons_user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lesson_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courses_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
    },
});



export default Lessons_User;