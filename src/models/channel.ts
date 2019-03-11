import sequelize from '../sequelize';
import Sequelize from 'sequelize';

export const Channel = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });