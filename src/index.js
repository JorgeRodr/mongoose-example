const Koa = require("koa");
const app = new Koa();
const mongoose = require("mongoose");
const BookModel = require("./models/book");
const Router = require("koa-router");
const body = require("koa-body");
const cors = require("koa-cors");

const mongoUri =
  "mongodb+srv://<user>:<password>@cluster0-2xsip.mongodb.net/test?retryWrites=true&w=majority";

const onDBReady = err => {
  app.use(body());
  app.use(cors());
  if (err) {
    throw new Error("Error connecting", err);
  }
  const router = new Router();

  app.listen(3000, () => {
    console.log("Koa example on port 3000!");
  });

  router.post("/books", async (ctx, next) => {
      console.log(ctx)
    ctx.body = await new BookModel(ctx.request.body).save();
    next();
  });

  router.get("/books", async (ctx, next) => {
    ctx.body = await BookModel.findById("5d0cb7c42fe5e34306885ceg");
    next();
  })

  // router.get("/films")

  router.get("/", ctx => {
    ctx.body = "Hello world";
  });

  app.use(router.routes());
};

mongoose.connect(mongoUri, onDBReady);
