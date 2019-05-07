import express from "express";

const app = express();

//Database connection
const { mongoose } = require("./db/database");

//Settings
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(express.json());

//Routes
app.use("/api/products", require("./routes/product.routes"));

//Server starter
app.listen(app.get("port"), () => {
  console.log(`Sever on port ${app.get("port")}`);
});
