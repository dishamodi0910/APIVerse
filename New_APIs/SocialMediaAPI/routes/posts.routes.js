import express from "express";
import PostController from "../controllers/posts.controller.js";
import verifyJwt from "../middleware/jwt-auth.js";

const postRouter = express.Router();

postRouter.route("/").get(verifyJwt, PostController.getUserPosts);
postRouter.route("/").post(verifyJwt, PostController.addUserPost);
// postRouter.route("/:postId").get(verifyJwt, PostController.getPostById);
// postRouter.route("/:postId").patch(verifyJwt, PostController.updateUserPostById);
// postRouter.route("/:postId").delete(verifyJwt, PostController.deleteUserPostById);
// postRouter.route("/:postId/likes").get(verifyJwt, PostController.getPostLikes);
// postRouter.route("/:postId/likes").post(verifyJwt, PostController.togglePostLike);




export default postRouter;