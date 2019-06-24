const booksRouter = require("./books.route");
const filmsRouter = require("./films.route");
const Router = require("koa-router");
const router = new Router({prefix: "/api"});

router.use(booksRouter.routes());
router.use(filmsRouter.routes());

module.exports = router;