const express = require("express");
const app = express();
const { cacheUtil } = require("./utils/cacheUtil");
var swaggerUi = require("swagger-ui-express");
const country = require("./api/paths/country");
const countries = require("./api/paths/countries");
const swaggerJSDoc = require("swagger-jsdoc");

app.use(express.json());

app.get("/countries", cacheUtil(100), countries.GET);
app.get(
  "/country/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",
  cacheUtil(100),
  country.GET
);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Swagger Configuration
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "GreenHouseGas API",
      version: "1.0.0",
    },
  },
  apis: ["./api/paths/country.js", "./api/paths/countries.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

console.log("OpenAPI documentation available in http://localhost:8080/");
