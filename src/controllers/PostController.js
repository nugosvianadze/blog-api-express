const {Category} = require("../models/Category");
const {Post} = require("../models/Post");
const {Types} = require("mongoose");

exports.createPost = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const categoryId = new Types.ObjectId(category);
        const getCategory = await Category.findById(categoryId);
        if (!getCategory) return res.send({ msg: 'Category not found' }, 404);
        const post = await Post.create({ title, description, category: getCategory });
        return res.send(post);
    } catch (_) {
        return res.send({ msg: _.message }, 500);
    }
}