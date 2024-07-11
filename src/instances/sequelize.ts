import * as Sequelize from 'sequelize';

const dbname = 'expressapp';
const username = 'root';
const password = 'root';

export const sequelize = new Sequelize(dbname, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();