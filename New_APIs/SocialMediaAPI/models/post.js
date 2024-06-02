import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5
    },
    content: {
        type: String,
        required: true,
        min: 10
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    userLikes: {type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: []}
});

const Post = mongoose.model('Post', postSchema);
export default Post;
