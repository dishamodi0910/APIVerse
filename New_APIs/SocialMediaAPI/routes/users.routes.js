import express from "express";
import UserController from "../controllers/users.controller.js";
import PostController from "../controllers/posts.controller.js";
import CommentController from "../controllers/comments.controller.js";
import verifyJwt from "../middleware/jwt-auth.js";

const userRouter = express.Router();


userRouter.route("/:userId/profile").get(verifyJwt, UserController.getUserProfile);
userRouter.route("/:userId/profile").patch(verifyJwt, UserController.updateUserProfile);
userRouter.route("/:userId/profile").delete(verifyJwt, UserController.deleteUserProfile);
userRouter.route("/:userId/following").get(verifyJwt, UserController.getUserFollowing);
userRouter.route("/:userId/following").post(verifyJwt, UserController.followUser);
userRouter.route("/:userId/following").delete(verifyJwt, UserController.unfollowUser);
userRouter.route("/:userId/followers").get(verifyJwt, UserController.getUserFollowers);
userRouter.route("/:userId/posts").get(verifyJwt, PostController.getUserPosts);
userRouter.route("/:userId/posts").post(verifyJwt, PostController.addUserPost);
userRouter.route("/:userId/posts/:postId").get(verifyJwt, PostController.getUserPostById);
userRouter.route("/:userId/posts/:postId").patch(verifyJwt, PostController.updateUserPostById);
userRouter.route("/:userId/posts/:postId").delete(verifyJwt, PostController.deleteUserPostById);
userRouter.route("/:userId/posts/:postId/like").get(verifyJwt, PostController.getPostLikes);
userRouter.route("/:userId/posts/:postId/like").post(verifyJwt, PostController.addPostLike);
userRouter.route("/:userId/posts/:postId/like").delete(verifyJwt, PostController.deletePostLike);
userRouter.route("/:userId/posts/:postId/comments").get(verifyJwt, CommentController.getPostComments);
userRouter.route("/:userId/posts/:postId/comments").post(verifyJwt, CommentController.addPostComment);
userRouter.route("/:userId/posts/:postId/comments/:commentId").patch(verifyJwt, CommentController.updatePostCommentById);
userRouter.route("/:userId/posts/:postId/comments/:commentId").delete(verifyJwt, CommentController.deletePostCommentById);




export default userRouter;