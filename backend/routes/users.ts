import { Router } from "express";
import multer from "multer";
import storage from "../cloudinary";
import catchAsync from "../utilities/catchAsync";
import {
    createNewUser,
    logInUser,
    logOutUser,
    userAuth,
    updateUser,
    getAllUser,
    addFollower,
    removeFollower,
    getSingleUser
} from "../controllers/users";
import { validateSignInForm, validateUser } from "../middleware";



const userRouter = Router();
const avatarUpload = multer({ storage });

userRouter.route("/").get(getAllUser);
userRouter.route("/auth").get(userAuth);
userRouter.route("/:userID").get(getSingleUser)
userRouter.route("/:userID/update").put(avatarUpload.single('avatar'), updateUser)
userRouter.route("/signup").post(validateUser, createNewUser);
userRouter.route("/signin").post(validateSignInForm, catchAsync(logInUser));
userRouter.route("/signout").post(logOutUser);
userRouter.route("/addfollower/:followerID").post(addFollower);
userRouter.route("/removefollower/:followerID").post(removeFollower);


export default userRouter;
