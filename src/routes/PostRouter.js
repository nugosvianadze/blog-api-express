const { createPost } = require("../controllers/PostController");
const validatePost = require("../middleware/validatePost");
const router = require("express").Router();

router.post("/", [validatePost], createPost);

module.exports = router;