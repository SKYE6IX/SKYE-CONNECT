var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import Post from "../models/posts";
import Like from "../models/likes";
import User from "../models/users";
import { io } from "../app";
function mapToObjectId(id) {
    return new mongoose.Types.ObjectId(id);
}
;
export const getPostLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const allPostLikes = yield Like.find({ post: id });
    res.json(allPostLikes);
});
export const addLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //Query current user ID
    const currentUser = yield User.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a._id);
    //Query the actual Post 
    const { id } = req.params;
    const currentPost = yield Post.findById(id);
    if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.likePosts.includes(mapToObjectId(currentPost === null || currentPost === void 0 ? void 0 : currentPost._id))) {
        throw new Error("Post already liked by you");
    }
    //create addLike
    const newLike = new Like({
        post: currentPost === null || currentPost === void 0 ? void 0 : currentPost._id,
        author: currentUser === null || currentUser === void 0 ? void 0 : currentUser._id,
    });
    const likeID = newLike.id;
    currentPost === null || currentPost === void 0 ? void 0 : currentPost.likes.push(likeID);
    currentUser === null || currentUser === void 0 ? void 0 : currentUser.likePosts.push(currentPost === null || currentPost === void 0 ? void 0 : currentPost.id);
    newLike.save();
    currentPost === null || currentPost === void 0 ? void 0 : currentPost.save();
    currentUser === null || currentUser === void 0 ? void 0 : currentUser.save();
    io.emit("like_added", newLike);
    res.json(currentPost);
});
export const removeLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    //Query current user ID
    const currentUser = yield User.findById((_b = req.user) === null || _b === void 0 ? void 0 : _b._id);
    //Query the actual Post
    const { id } = req.params;
    const currentPost = yield Post.findById(id);
    const currentLike = yield Like.findOne({
        post: currentPost === null || currentPost === void 0 ? void 0 : currentPost._id,
        author: currentUser === null || currentUser === void 0 ? void 0 : currentUser._id,
    });
    //remove like post from the user likePosts Array
    const removePostLiked = currentUser === null || currentUser === void 0 ? void 0 : currentUser.likePosts.filter((likePost) => String(likePost) !== String(currentPost === null || currentPost === void 0 ? void 0 : currentPost._id));
    if (currentUser != null) {
        currentUser.likePosts = removePostLiked;
        currentUser.markModified("likePosts");
    }
    //remove the like from the post
    const filterLike = currentPost === null || currentPost === void 0 ? void 0 : currentPost.likes.filter((like) => String(like) !== String(currentLike === null || currentLike === void 0 ? void 0 : currentLike._id));
    if (currentPost != null) {
        currentPost.likes = filterLike;
        currentPost === null || currentPost === void 0 ? void 0 : currentPost.markModified("likes");
    }
    currentLike === null || currentLike === void 0 ? void 0 : currentLike.remove();
    currentPost === null || currentPost === void 0 ? void 0 : currentPost.save();
    currentUser === null || currentUser === void 0 ? void 0 : currentUser.save();
    io.emit("like_removed", currentLike);
    res.json(currentPost);
});
