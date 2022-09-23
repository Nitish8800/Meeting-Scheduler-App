const express = require("express");
const swaggerui = require("swagger-ui-express");
const swaggerdoc = require("./swagger/swagger.json");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const path = require("path");
const cookieParser = require("cookie-parser");
const { errors: celebrateErrors } = require("celebrate");

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config({
  path: path.join(__dirname, ".env"),
});

connectDB();

app.use(express.static(path.join(__dirname, "upload")));

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerdoc));

app.get("/", (req, res) => {
  res.send("Hello World Home ");
});
app.use(celebrateErrors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server started at port: " + PORT);
});
