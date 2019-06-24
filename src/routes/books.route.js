const Router = require("koa-router");
const router = new Router();
const BookModel = require("../models/book");

router.get("/books", async (ctx, next) => {
  try {
    ctx.body = await BookModel.find(ctx.query ? ctx.query : null);
    next();
  } catch (e) {
    ctx.throw("500", e);
    return;
  }
});

router.get("/books/:id", async (ctx, next) => {
  try {
    ctx.body = await BookModel.findById(ctx.params.id);
    next();
  } catch (e) {
    ctx.throw("500", e);
    return;
  }
});

// router.get("/books/:title", async (ctx, next) => {
//   ctx.body = await BookModel.find({ title: new RegExp(ctx.params.title) });
//   next();
// });

router.post("/books", async (ctx, next) => {
  try {
    ctx.body = await new BookModel(ctx.request.body).save();
    next();
  } catch (e) {
    ctx.throw("500", e);
    return;
  }
});

router.put("/books/:id", async (ctx, next) => {
  try {
    const book = await BookModel.findOneAndUpdate(
      { _id: ctx.params.id },
      ctx.request.body
    );
    ctx.body = book;
    next();
  } catch (e) {
    ctx.throw("500", e);
    return;
  }

  //   const book = await BookModel.findOne({ _id: id });
  //   const bookToSave = Object.assign(book, ctx.request.body);
  //   bookToSave.save();
});

router.delete("/books/:id", async (ctx, next) => {
  try {
    const book = await BookModel.deleteOne({ _id: ctx.params.id });
    ctx.body = book;
    next();
  } catch (e) {
    ctx.throw("500", e);
    return;
  }
});

module.exports = router;
