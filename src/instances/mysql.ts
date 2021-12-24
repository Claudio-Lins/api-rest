import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.MYSQL_DB_DEV as string,
  process.env.MYSQL_USER_DEV as string,
  process.env.MYSQL_PASSWORD_DEV as string,
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOST_DEV as string,
    port: parseInt(process.env.MYSQL_PORT as string)
  }
)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully.')
  })
  .catch(() => {
    console.log('Unable to connect to the database')
  })