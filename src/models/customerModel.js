import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Customer = db.define(
  "customers",
  {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.BIGINT,
    },
    product_id: {
      type: DataTypes.STRING,
    },
    vechicle_model:{
      type: DataTypes.STRING
    },
    vechicle_number:{
      type: DataTypes.STRING
    },
    amount:{
      type: DataTypes.DECIMAL
    },
    key_number:{
      type: DataTypes.STRING
    },
    bank_name:{
      type:  DataTypes.STRING
    },
    essential_doc:{
      type:  DataTypes.STRING
    },
    product_creation_loc: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Customer;