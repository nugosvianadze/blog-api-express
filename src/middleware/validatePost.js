const validatePost = (req, res, next) => {
    const { title, description, category } = req.body;
    console.log(title, description, category)
    if (!title || !description || !category) {
        return res.send(400).send({ msg: 'Please provide title, description and category' });
    }
    next();
}

module.exports = validatePost;