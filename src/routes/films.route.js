const Router = require("koa-router");
const router = new Router();

router.get("/films", (ctx, next) => {
    ctx.body = "Hello films!";
    next();
});

module.exports = router;