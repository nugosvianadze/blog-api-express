const validatePost = (req, res, next) => {
    const { title, description, category } = req.body;
    console.log(title, description, category)
    if (!title || !description || !category) {
        return res.send({ msg: 'All fields are required' }, 400);
    }
    next();
}

module.exports = validatePost;