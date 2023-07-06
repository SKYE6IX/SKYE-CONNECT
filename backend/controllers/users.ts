import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import passport from "passport";
import User from "../models/users";
import type { IPhoto } from "../types";

export const getAllUser = async (req: Request, res: Response) => {
    const userID = req.user?._id!;
    const returnUsers = (await User.find()).filter(
        (user) => String(user._id) !== String(userID)
    );
    res.json(returnUsers);
};

export async function getSingleUser(req: Request, res: Response) {
    const { user_id } = req.params;
    const singleUser = await User.findById(user_id)
        .populate({
            path: "posts",
            populate: {
                path: "author",
            },
        })
        .populate({
            path: "likePosts",
            populate: {
                path: "author",
            },
        })
        .populate({ path: "following" })
        .populate({ path: "followers" });

    res.json(singleUser);
}

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const {
            username,
            email,
            password,
            first_name,
            last_name,
            gender,
            date_of_birth,
        } = req.body;
        const newUser = new User({
            username,
            email,
            first_name,
            last_name,
            gender,
            date_of_birth,
            created_at: new Date(),
        });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err: any) => {
            if (err) {
                res.json({
                    status: false,
                    message: "Unable to sign you in" + err,
                });
            } else {
                res.json({
                    status: true,
                    message: "Account Created Successfully",
                });
            }
        });
    } catch (e: any) {
        if (e.code === 11000) {
            res.status(409).json({
                status: false,
                message: "User with this email already exist",
            });
        } else {
            res.status(409).json(e);
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const {
        email,
        username,
        first_name,
        last_name,
        date_of_birth,
        gender,
        country,
        city,
        professional,
        about_me,
        relationship,
    } = req.body;

    const updateUser = await User.findByIdAndUpdate(user_id, {
        $set: {
            email,
            username,
            first_name,
            last_name,
            date_of_birth,
            gender,
            country,
            city,
            professional,
            about_me,
            relationship,
        },
    });

    const file = req.file as Express.Multer.File;

    if (file && updateUser != undefined) {
        const publicID = updateUser.avatar.filename;
        cloudinary.uploader.destroy(publicID).then((res) => console.log(res));
        const avatarResult: IPhoto = {
            url: file.path,
            filename: file.filename,
        };
        updateUser.avatar = avatarResult;
    }

    await updateUser?.save();

    res.json({ status: "success" });
};

//Header upload and update
export const uploadHeaderCover = async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const user = await User.findById(user_id);
    const file = req.file as Express.Multer.File;
    //First delete thee old cover if it exist
    if (user?.header_cover) {
        const public_id = user.header_cover.filename;
        cloudinary.uploader.destroy(public_id).then((res) => console.log(res));
    }
    const optimizeImgUrl = file.path.replace("/upload", "/upload/q_80");
    if (user != undefined) {
        const header_cover: IPhoto = {
            url: optimizeImgUrl,
            filename: file.filename,
        };
        user.header_cover = header_cover;
    }
    await user?.save();

    res.send({ status: true });
};

export const logInUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send({ status: false, ...info });
        }
        req.login(user, (loginErr: any) => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.send({
                status: true,
                message: "Welcome Back",
            });
        });
    })(req, res, next);
};

export const userAuth = async (req: Request, res: Response) => {
    const currentUser = req.user;
    if (!currentUser) {
        res.json({ status: false });
    } else {
        const user = await User.findById(currentUser._id)
            .populate({
                path: "posts",
                populate: {
                    path: "author",
                },
            })
            .populate({
                path: "likePosts",
                populate: {
                    path: "author",
                },
            })
            .populate({ path: "following" })
            .populate({ path: "followers" })
            .populate("chatLists.chat_with");
        res.json(user);
    }
};

export const logOutUser = (req: Request, res: Response) => {
    req.logout(function (err: any) {
        if (err) {
            res.send({
                status: false,
                message: "unable to sign you out" + err,
            });
        } else {
            res.send({
                status: true,
                message: "Goodbye! See you soon",
            });
        }
    });
};

export async function addFollower(req: Request, res: Response) {
    const userID = req.user?._id!;
    const { followerID } = req.params;
    const currentUser = await User.findById(userID);
    const otherUser = await User.findById(followerID);
    if (currentUser != null && otherUser != null) {
        currentUser.following.push(otherUser._id);
        otherUser.followers.push(currentUser._id);
    }
    currentUser?.save();
    otherUser?.save();

    res.json({
        message: "User added",
        status: true,
    });
}

export async function removeFollower(req: Request, res: Response) {
    const userID = req.user?._id!;
    const { followerID } = req.params;
    await User.findByIdAndUpdate(userID, { $pull: { following: followerID } });
    await User.findByIdAndUpdate(followerID, { $pull: { followers: userID } });
    res.json({ message: "User unfollow" });
}
