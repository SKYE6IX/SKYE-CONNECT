import { Router } from "express";
import { createComment, deleteComment, getComments } from "../controllers/comment";
import { isLoggedIn, isCommentAuthor, validateComment } from "../middleware";
const commentRouter = Router();
commentRouter.route("/:id/comments")
    .post(isLoggedIn, validateComment, createComment)
    .get(getComments);
commentRouter.route("/:id/comments/:commentID")
    .delete(isLoggedIn, isCommentAuthor, deleteComment);
export default commentRouter;
