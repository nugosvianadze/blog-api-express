const router = require("express").Router();
const categoryRouter = require("./CategoryRouter");

router.use("/category", categoryRouter);

module.exports = router;