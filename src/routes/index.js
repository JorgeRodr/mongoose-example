const Router = require("koa-router");

const booksRoute = require("./books.route");
const filmsRoute = require("./films.route");

const router = new Router({ prefix: "/api" });

router.use(booksRoute.routes());
router.use(filmsRoute.routes());

module.exports = router;
