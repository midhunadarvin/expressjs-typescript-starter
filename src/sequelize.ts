import Sequelize from 'sequelize';
const sequelize = new Sequelize('local_testing', 'root', 'password', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
export default sequelize;