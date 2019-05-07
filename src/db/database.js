import mongoose from "mongoose";

const URL = "mongodb://localhost/Astore";

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => console.log(err));

module.exports = mongoose;
