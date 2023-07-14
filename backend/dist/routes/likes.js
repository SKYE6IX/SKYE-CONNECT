import { Router } from "express";
import { addLike, removeLike, getPostLikes } from "../controllers/likes";
import catchAsync from "../utilities/catchAsync";
import { isLoggedIn } from "../middleware";
const likeRouter = Router();
likeRouter
    .route("/:id/likes")
    .get(isLoggedIn, catchAsync(getPostLikes))
    .post(isLoggedIn, catchAsync(addLike))
    .delete(isLoggedIn, catchAsync(removeLike));
export default likeRouter;
