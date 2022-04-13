const { Op } = require("sequelize");

const clauseUtil = (startYear, endYear, offset, limit) => {
  if (!offset) {
    offset = 0;
  }
  if (!limit) {
    offset = 100;
  }
  const clause = {
    where: {},
    offset,
    limit,
    raw: true,
  };
  if (startYear && endYear) {
    clause.where.year = {
      [Op.between]: [startYear, endYear],
    };
    return clause;
  }
  if (startYear) {
    clause.where.year = {
      [Op.gte]: startYear,
    };
    return clause;
  }
  if (endYear) {
    clause.where.year = {
      [Op.lte]: endYear,
    };
    return clause;
  }
  return clause;
};
module.exports = {
  clauseUtil,
};
