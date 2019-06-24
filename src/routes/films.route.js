const Router = require("koa-router");
const filmRouter = new Router();

filmRouter.get("/films", ctx => {
  ctx.body = "Hello world";
});

module.exports = filmRouter;
