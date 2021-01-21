require('dotenv').config()


module.exports =
{
  "development": {
    "username": process.env.DB.USER,
    "password": process.env.DB.PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB,
    "password": process.env.DB.PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB,
    "password": process.env.DB.PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
