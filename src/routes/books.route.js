const Router = require("koa-router");
const router = new Router();
const BookModel = require("../models/book");

router.get("/books", async (ctx, next) => {
  ctx.body = await BookModel.find(ctx.query ? ctx.query : null);
  next();
});

router.get("/books/:id", async (ctx, next) => {
  ctx.body = await BookModel.findById(ctx.params.id);
  next();
});

// router.get("/books/:title", async (ctx, next) => {
//   ctx.body = await BookModel.find({ title: new RegExp(ctx.params.title) });
//   next();
// });

router.post("/books", async (ctx, next) => {
  console.log(ctx);
  ctx.body = await new BookModel(ctx.request.body).save();
  next();
});

router.put("/books/:id", async (ctx, next) => {
  const id = ctx.params.id;
  const book = await BookModel.findOneAndUpdate({ _id: id }, ctx.request.body);
  ctx.body = book;
  next();

  //   const book = await BookModel.findOne({ _id: id });
  //   const bookToSave = Object.assign(book, ctx.request.body);
  //   bookToSave.save();
});

router.delete("/books/:id", async (ctx, next) => {
  const id = ctx.params.id;
  const book = await BookModel.deleteOne({ _id: id });
  ctx.body = book;
  next();
});

module.exports = router;
