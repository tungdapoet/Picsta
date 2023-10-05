const mongoose = require('mongoose');

const FollowSchema = new mongoose.Schema({
    followerUserId: { type: String, required: true },
    followedUserId: { type: String, required: true }
});

const Follow = mongoose.model('Rating', FollowSchema);

module.exports = Follow;