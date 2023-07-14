import { Router } from "express";
import { addLike, removeLike, getPostLikes } from "../controllers/likes";
import catchAsync from "../utilities/catchAsync";
const likeRouter = Router();
likeRouter
    .route("/:id/likes")
    .get(catchAsync(getPostLikes))
    .post(catchAsync(addLike))
    .delete(catchAsync(removeLike));
export default likeRouter;
