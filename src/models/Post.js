const mongoose = require('mongoose');
require('./Category');

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, unique: true, minlength: 1, required: true },
        description: { type: String, unique: true, minlength: 1, required: true },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        timestamp: { type: Date, default: Date.now },
        status: { type: Boolean, default: true },
    },
    { versionKey: false }
);

const Post = mongoose.model('Post', PostSchema);
module.exports = { Post, PostSchema };