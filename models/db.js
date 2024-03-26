import { Sequelize } from "sequelize";
import "dotenv/config.js";
import logger from "../logger/index.js";
// import { initialize } from "passport";

import pkg from "passport";
const { initialize } = pkg;

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "sql11.freemysqlhosting.net",
    dialect: "mysql",
  }
);

// User
const User = sequelize.define("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(50),
  },
  role: {
    type: Sequelize.STRING(50),
  },
});

// Entry
const Entry = sequelize.define("Entry", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
  },
});

export default { Entry, User, sequelize };
