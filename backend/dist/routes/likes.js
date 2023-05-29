import { Router } from "express";
import { addLike, removeLike, getPostLikes } from "../controllers/likes";
const likeRouter = Router();
likeRouter.route("/:id/likes")
    .get(getPostLikes)
    .post(addLike)
    .delete(removeLike);
export default likeRouter;
