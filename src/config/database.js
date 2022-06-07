import { Sequelize } from "sequelize";

const db = new Sequelize("key_mgt", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
