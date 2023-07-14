import { Router } from "express";
import multer from "multer";
import storage from "../cloudinary";
import catchAsync from "../utilities/catchAsync";
import { createNewUser, logInUser, logOutUser, userAuth, updateUser, getAllUser, addFollower, removeFollower, getSingleUser, uploadHeaderCover, } from "../controllers/users";
import { validateSignInForm, validateUser, isLoggedIn } from "../middleware";
const userRouter = Router();
const avatarUpload = multer({ storage });
const headerCoverUpload = multer({ storage });
// ROUTES
userRouter.route("/").get(isLoggedIn, catchAsync(getAllUser));
userRouter.route("/auth").get(catchAsync(userAuth));
userRouter.route("/:user_id").get(isLoggedIn, catchAsync(getSingleUser));
userRouter
    .route("/:user_id/update")
    .put(isLoggedIn, avatarUpload.single("avatar"), catchAsync(updateUser));
userRouter
    .route("/:user_id/upload-header-cover")
    .put(isLoggedIn, headerCoverUpload.single("header_cover"), catchAsync(uploadHeaderCover));
userRouter.route("/signup").post(validateUser, catchAsync(createNewUser));
userRouter.route("/signin").post(validateSignInForm, catchAsync(logInUser));
userRouter.route("/signout").post(catchAsync(logOutUser));
userRouter
    .route("/addfollower/:followerID")
    .post(isLoggedIn, catchAsync(addFollower));
userRouter
    .route("/removefollower/:followerID")
    .post(isLoggedIn, catchAsync(removeFollower));
export default userRouter;
