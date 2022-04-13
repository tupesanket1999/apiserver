const { Sequelize } = require("sequelize");
const GreenHouseGas = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  year: {
    type: Sequelize.INTEGER,
  },
  value: {
    type: Sequelize.FLOAT,
  },
  country: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
};
module.exports = {
  GreenHouseGas,
};
