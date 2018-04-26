import {Sequelize} from 'sequelize-typescript';
import * as path from 'path';
import * as database from '../config/database';

export const sequelize = new Sequelize({
  dialect: database.development.dialect,
  database: database.development.database,
  username: database.development.username,
  password: database.development.password,
  port: database.development.port,
  modelPaths: [path.resolve('server/models')]
});