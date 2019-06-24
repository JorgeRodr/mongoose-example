require("dotenv").config();
const Koa = require("koa");
const app = new Koa();
const mongoose = require("mongoose");
const router = require("./routes");
const body = require("koa-body");
const cors = require("koa-cors");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${
  process.env.DB_URI
}`;

const onDBReady = err => {
  if (err) {
    throw new Error("Error connecting", err);
  }

  app.use(body());
  app.use(cors());
  app.use(router.routes());

  app.listen(3000, () => {
    console.log("Koa example on port 3000!");
  });
};

mongoose.connect(mongoUri, onDBReady);
