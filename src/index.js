const Koa = require("koa");
const app = new Koa();
const mongoose = require("mongoose");

const mongoUri = "mongodb://<ip>:<port>/<database>";

const onDBReady = err => {
  if (err) {
    throw new Error("Error connecting", err);
  }
  app.listen(3000, () => {
    console.log("Koa example on port 3000!");
  });
};

mongoose.connect(mongoUri, onDBReady);
