import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'petshop',
  username: 'postgres',
  password: 'root',
  port:5432,
  modelPaths: ['D:/Estudos/pet-app/server/models']
  
});