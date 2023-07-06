var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v2 as cloudinary } from "cloudinary";
import passport from "passport";
import User from "../models/users";
export const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
    const returnUsers = (yield User.find()).filter((user) => String(user._id) !== String(userID));
    res.json(returnUsers);
});
export function getSingleUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user_id } = req.params;
        const singleUser = yield User.findById(user_id)
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
    });
}
export const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, first_name, last_name, gender, date_of_birth, } = req.body;
        const newUser = new User({
            username,
            email,
            first_name,
            last_name,
            gender,
            date_of_birth,
            created_at: new Date(),
        });
        const registerUser = yield User.register(newUser, password);
        req.login(registerUser, (err) => {
            if (err) {
                res.json({
                    status: false,
                    message: "Unable to sign you in" + err,
                });
            }
            else {
                res.json({
                    status: true,
                    message: "Account Created Successfully",
                });
            }
        });
    }
    catch (e) {
        if (e.code === 11000) {
            res.status(409).json({
                status: false,
                message: "User with this email already exist",
            });
        }
        else {
            res.status(409).json(e);
        }
    }
});
export const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { email, username, first_name, last_name, date_of_birth, gender, country, city, professional, about_me, relationship, } = req.body;
    const updateUser = yield User.findByIdAndUpdate(user_id, {
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
    const file = req.file;
    if (file && updateUser != undefined) {
        const publicID = updateUser.avatar.filename;
        cloudinary.uploader.destroy(publicID).then((res) => console.log(res));
        const avatarResult = {
            url: file.path,
            filename: file.filename,
        };
        updateUser.avatar = avatarResult;
    }
    yield (updateUser === null || updateUser === void 0 ? void 0 : updateUser.save());
    res.json({ status: "success" });
});
//Header upload and update
export const uploadHeaderCover = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const user = yield User.findById(user_id);
    const file = req.file;
    //First delete thee old cover if it exist
    if (user === null || user === void 0 ? void 0 : user.header_cover) {
        const public_id = user.header_cover.filename;
        cloudinary.uploader.destroy(public_id).then((res) => console.log(res));
    }
    const optimizeImgUrl = file.path.replace("/upload", "/upload/q_80");
    if (user != undefined) {
        const header_cover = {
            url: optimizeImgUrl,
            filename: file.filename,
        };
        user.header_cover = header_cover;
    }
    yield (user === null || user === void 0 ? void 0 : user.save());
    res.send({ status: true });
});
export const logInUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send(Object.assign({ status: false }, info));
        }
        req.login(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.send({
                status: true,
                message: "Welcome Back",
            });
        });
    })(req, res, next);
});
export const userAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentUser = req.user;
    if (!currentUser) {
        res.json({ status: false });
    }
    else {
        const user = yield User.findById(currentUser._id)
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
});
export const logOutUser = (req, res) => {
    req.logout(function (err) {
        if (err) {
            res.send({
                status: false,
                message: "unable to sign you out" + err,
            });
        }
        else {
            res.send({
                status: true,
                message: "Goodbye! See you soon",
            });
        }
    });
};
export function addFollower(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        const { followerID } = req.params;
        const currentUser = yield User.findById(userID);
        const otherUser = yield User.findById(followerID);
        if (currentUser != null && otherUser != null) {
            currentUser.following.push(otherUser._id);
            otherUser.followers.push(currentUser._id);
        }
        currentUser === null || currentUser === void 0 ? void 0 : currentUser.save();
        otherUser === null || otherUser === void 0 ? void 0 : otherUser.save();
        res.json({
            message: "User added",
            status: true,
        });
    });
}
export function removeFollower(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        const { followerID } = req.params;
        yield User.findByIdAndUpdate(userID, { $pull: { following: followerID } });
        yield User.findByIdAndUpdate(followerID, { $pull: { followers: userID } });
        res.json({ message: "User unfollow" });
    });
}
