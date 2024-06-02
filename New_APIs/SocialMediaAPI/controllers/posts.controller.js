
import Post from "../models/post.js"
import User from "../models/user.js";
import Comment from "../models/comment.js";
export default class PostController {

    static async getUserPosts(req, res, next) {
        try {
            const {userId} = req.params
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                console.log(user.followers);
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const posts = await Post.find({ userId: user._id });
            res.status(200).json(posts);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
    }
    
    static async getUserPostById(req, res, next) {
        try {
            const {userId, postId} = req.params
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                console.log(user.followers);
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            res.status(200).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
    }

    static async addUserPost(req, res, next) {
        try {
            const {userId} = req.params;
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if(!user._id.equals(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const { title, content } = req.body;
            const post = new Post(
                {
                    title: title,
                    content: content,
                    userId: user._id
                }
            );
            const response = await post.save();
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }

    static async updateUserPostById(req, res, next) {
        try {
            const {userId, postId} = req.params;
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if(!user._id.equals(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            const { title, content } = req.body;
            if(title) post.title = title;
            if(content) post.content = content;
            const response = await post.save();
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

    static async deleteUserPostById(req, res, next) {
        try {
            const {userId, postId} = req.params;
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if(!user._id.equals(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId});
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            await Post.findByIdAndDelete(post._id);
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

    static async getPostLikes(req, res, next) {
        try {
            const {userId, postId} = req.params
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).send({ error: "No User found" })
            }
            if (!user._id.equals(req.user._id) && !user.followers.includes(req.user._id)){
                return (res.status(401).json({ error: "Unauthorized" }));
            }
            const post = await Post.findOne({userId: user._id, _id: postId}).populate("userLikes");
            if(!post){
                return res.status(404).json({error: "Post not found"})
            }
            const likes = post.userLikes;
            const response = likes.map((user) => {
                const { _id, username, name } = user;
                return ({ _id, username, name });
            })
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }

    }
    

    static async addPostLike(req, res, next) {
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
            if(post.userLikes.includes(req.user._id)){
                return res.status(401).json({error: "Already liked"})
            }
            post.userLikes.push(req.user._id);
            const response = await post.save();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
    }
    static async deletePostLike(req, res, next) {
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
            if(!post.userLikes.includes(req.user._id)){
                return res.status(401).json({error: "Not Liked"})
            }
            post.userLikes = post.userLikes.filter((uid)=>{
                return(!req.user._id.equals(uid));
            })
            const response = await post.save();
            res.status(200).json({response});
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
    }
    

    
}