const booksRouter = require("koa-router")();
const BookModel = require("../models/book");

booksRouter.post("/books", async (ctx, next) => {
  try {
    ctx.body = await new BookModel(ctx.request.body).save();
    next();
  } catch (e) {
    ctx.throw(e);
    return;
  }
});

booksRouter.get("/books", async (ctx, next) => {
  try {
    ctx.body = await BookModel.find();
    next();
  } catch (e) {
    ctx.throw(e);
    return;
  }
});

module.exports = booksRouter;
