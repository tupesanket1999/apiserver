const db = require("../../database");
const { clauseUtil } = require("../../utils/clauseUtil.js");

/**
 * @swagger
 * /country/{id}:
 *   get:
 *     summary: Get greenHouseGas by id
 *     operationId: getGreenHouseGasById
 *     description: Get GreenHouseGas
 *     parameters:
 *     - name: id
 *       description: get specific record by id
 *       in: path
 *       required: true
 *       schema:
 *         type: string
 *          format:uuid
 *     responses:
 *       default:
 *         description: Success
 *
 */
const GET = async (req, res) => {
  const { id } = req.params;
  try {
    const clause = {
      where: {
        id: id,
      },
      raw: true,
    };
    const result = await db.GreenHouseGas.findOne(clause);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(502).send(`Internal Server Error : ${error}`);
  }
};

module.exports = {
  GET,
};
