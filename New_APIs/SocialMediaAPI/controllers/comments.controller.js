
import Post from "../models/post.js"
import User from "../models/user.js";
import Comment from "../models/comment.js";

export default class CommentController {
    static async addPostComment(req, res, next) {
        try {
            const {userId, postId} = req.params
            const {text} = req.body;
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            const comment = new Comment({
                text: text,
                userId: req.user._id,
                postId: post._id
            })
            const response = await comment.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
    }

    static async getPostComments(req, res, next) {
        try {
            const {userId, postId} = req.params
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            const comments = await Comment.find({postId: post._id});
    
            const response = comments
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }

    }
    static async updatePostCommentById(req, res, next) {
        try {
            const {userId, postId, commentId} = req.params
            const {text} = req.body;
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            const comment = await Comment.findById(commentId);
            if(!comment){
                return res.status(404).json({error: "Comment not found"})
            }
            if(!req.user._id.equals(comment.userId) || !post._id.equals(comment.postId)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            comment.text = text;
            const response = await comment.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }

    }

    
    static async deletePostCommentById(req, res, next) {
        try {
            const {userId, postId, commentId} = req.params
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            const comment = await Comment.findById(commentId);
            if(!comment){
                return res.status(404).json({error: "Comment not found"})
            }
            if(!req.user._id.equals(comment.userId) || !post._id.equals(comment.postId)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            await Comment.findByIdAndDelete(commentId);
            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }

    }

    
}