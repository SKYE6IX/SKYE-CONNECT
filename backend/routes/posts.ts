import { Router } from "express";
import multer from "multer";
import {
    allPost,
    getSinglePost,
    createPost,
    deletePost,
} from "../controllers/posts";
import storage from "../cloudinary";
import { isLoggedIn, isPostAuthor, validatePost } from "../middleware";
import catchAsync from "../utilities/catchAsync";

const imagesUpload = multer({ storage });
const postRouter = Router();

postRouter
    .route("/")
    .get(allPost)
    .post(
        isLoggedIn,
        validatePost,
        imagesUpload.array("images"),
        catchAsync(createPost)
    );

postRouter
    .route("/:id")
    .get(catchAsync(getSinglePost))
    .delete(isLoggedIn, isPostAuthor, catchAsync(deletePost));

export default postRouter;
