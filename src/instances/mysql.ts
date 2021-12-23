import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.MYSQL_DB as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASSWORD as string,
  {
    dialect: "mysql",
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