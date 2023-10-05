const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    imageId: { type: String, required: true }
});

const Like = mongoose.model('Rating', LikeSchema);

module.exports = Like;