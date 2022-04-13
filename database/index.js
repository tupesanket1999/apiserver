const { Sequelize, Model, DataTypes } = require("sequelize");
const { user, host, database, password, port } = require("./credentials");
const { GreenHouseGas } = require("./model/greenHouseGas.js");
const db = {};
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.GreenHouseGas = sequelize.define("green_house_gas", GreenHouseGas);
module.exports = db;
