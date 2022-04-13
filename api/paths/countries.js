const db = require("../../database");
const { clauseUtil } = require("../../utils/clauseUtil.js");

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get all greenHouseGas
 *     operationId: getAllGreenHouseGas
 *     description: Get all GreenHouseGas
 *     parameters:
 *     - name: startYear
 *       description: Start of the year from which we show data
 *       in: query
 *       required: false
 *       schema:
 *         type: integer
 *     - name: endYear
 *       description: Till end year we show data
 *       in: query
 *       required: false
 *       schema:
 *         type: integer
 *     - name: refresh
 *       description: refresh cache
 *       in: query
 *       required: false
 *       schema:
 *         type: string
 *     - name: offset
 *       description: use offset since data is large
 *       in: query
 *       required: false
 *       schema:
 *         type: integer
 *     - name: limit
 *       description: use limit since data is large
 *       in: query
 *       required: false
 *       schema:
 *         type: integer
 *     responses:
 *       default:
 *         description: Success
 *
 */
const GET = async (req, res) => {
  try {
    const { startYear, endYear, offset, limit } = req.query;
    const clause = clauseUtil(startYear, endYear, offset, limit);
    let items = await db.GreenHouseGas.findAll(clause);
    let result = {};
    result.items = items;
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(502).send(`Internal Server Error : ${error}`);
  }
};
module.exports = {
  GET,
};
