const router = require("express").Router();
const categoryRouter = require("./CategoryRouter");
const userRouter = require("./UserRouter");
const postRouter = require("./PostRouter");

router.use("/post", postRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);
module.exports = router;
