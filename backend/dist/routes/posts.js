import { Router } from "express";
import multer from "multer";
import { allPost, getSinglePost, createPost, deletePost, } from "../controllers/posts";
import storage from "../cloudinary";
import { isLoggedIn, isPostAuthor, validatePost } from "../middleware";
const imagesUpload = multer({ storage });
const postRouter = Router();
postRouter
    .route("/")
    .get(allPost)
    .post(isLoggedIn, validatePost, imagesUpload.array("images"), createPost);
postRouter
    .route("/:id")
    .get(getSinglePost)
    .delete(isLoggedIn, isPostAuthor, deletePost);
export default postRouter;
