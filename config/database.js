const database = {
  development: {
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'admin',
    database: process.env.DATABASE_NAME || 'petshop',
    host:  process.env.DATABASE_HOST || '0.0.0.0',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    underscored:true
  },
  test: {
    username: process.env.DATABASE_USERNAME_TEST || 'postgres',
    password: process.env.DATABASE_PASSWORD_TEST || 'root',
    database: process.env.DATABASE_NAME_TEST || 'test',
    host: process.env.DATABASE_HOST_TEST || '0.0.0.0',
    port: process.env.DATABASE_PORT_TEST || 5432,
    dialect: 'postgres',
    pool: {
      max: process.env.POLL_MAX || 10,
      min: process.env.POLL_MIN || 5,
      idle: 10000
    },
    underscored:true
  },
  production: {
    username: process.env.DATABASE_USERNAME_PRO,
    password: process.env.DATABASE_PASSWORD_PRO,
    database: process.env.DATABASE_NAME_PRO,
    host: process.env.DATABASE_HOST_PRO,
    port: process.env.DATABASE_PORT_PRO || 5432,
    dialect: 'postgres',
    pool: {
      max: 10,
      min:  5,
      idle: 30000
    },
    underscored:true
  }
};

module.exports = database;
