import { Router } from "express";
import { createComment, deleteComment, getComments, } from "../controllers/comment";
import { isLoggedIn, isCommentAuthor, validateComment } from "../middleware";
import catchAsync from "../utilities/catchAsync";
const commentRouter = Router();
commentRouter
    .route("/:id/comments")
    .post(isLoggedIn, validateComment, catchAsync(createComment))
    .get(isLoggedIn, catchAsync(getComments));
commentRouter
    .route("/:id/comments/:commentID")
    .delete(isLoggedIn, isCommentAuthor, catchAsync(deleteComment));
export default commentRouter;
