const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "International Greenhouse Gas Emissions API",
    version: "1.0.0",
  },
  definitions: {
    GreenHouseGas: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
        },
        value: {
          type: "number",
        },
        year: {
          type: "integer",
        },
        country: {
          type: "string",
        },
        category: {
          type: "string",
        },
        createdAt: {
          type: "string",
        },
        updatedAt: {
          type: "string",
        },
      },
      required: ["id"],
    },
  },
  paths: {},
};

module.exports = apiDoc;
