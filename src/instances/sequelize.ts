import { Sequelize } from 'sequelize-typescript';

const dbname = 'some_db';
const username = 'root';
const password = '';

export const sequelize = new Sequelize({
  database: dbname,
  dialect: 'postgres',
  username: username,
  password: password,
  storage: ':memory:',
  // models: [__dirname + '/models'], // or [Player, Team],
});

// sequelize.addModels([__dirname + '/**/*.model.ts']);

sequelize.authenticate();