const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    imageId: { type: String, required: true }
});

const Comment = mongoose.model('Rating', CommentSchema);

module.exports = Comment;