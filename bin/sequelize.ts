import {Sequelize} from 'sequelize-typescript';
import * as path from 'path';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'petshop',
  username: 'postgres',
  password: 'admin',
  port: 5432,
  modelPaths: [path.resolve('server/models')]
});