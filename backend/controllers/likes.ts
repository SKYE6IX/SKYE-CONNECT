import { Request, Response } from "express";
import mongoose from "mongoose";
import Post from "../models/posts";
import Like from "../models/likes";
import User from "../models/users";
import { io } from "../app";

function mapToObjectId(id: any) {
    return new mongoose.Types.ObjectId(id);
};

export const getPostLikes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const allPostLikes = await Like.find({ post: id });
    res.json(allPostLikes);
}

export const addLike = async (req: Request, res: Response) => {
    //Query current user ID
    const currentUser = await User.findById(req.user?._id);
    //Query the actual Post 
    const { id } = req.params;
    const currentPost = await Post.findById(id);

    if (currentUser?.likePosts.includes(mapToObjectId(currentPost?._id))) {
        throw new Error("Post already liked by you");
    }
    //create addLike
    const newLike = new Like({
        post: currentPost?._id,
        author: currentUser?._id,
    });
    const likeID = newLike.id;
    currentPost?.likes.push(likeID);
    currentUser?.likePosts.push(currentPost?.id);

    newLike.save();
    currentPost?.save();
    currentUser?.save();

    io.emit("like_added", newLike)

    res.json(currentPost);
};

export const removeLike = async (req: Request, res: Response) => {
    //Query current user ID
    const currentUser = await User.findById(req.user?._id);
    //Query the actual Post
    const { id } = req.params;
    const currentPost = await Post.findById(id);
    const currentLike = await Like.findOne({
        post: currentPost?._id,
        author: currentUser?._id,
    });
    //remove like post from the user likePosts Array
    const removePostLiked = currentUser?.likePosts.filter(
        (likePost) => String(likePost) !== String(currentPost?._id)
    )!;
    if (currentUser != null) {
        currentUser.likePosts = removePostLiked;
        currentUser.markModified("likePosts");
    }
    //remove the like from the post
    const filterLike = currentPost?.likes.filter(
        (like) => String(like) !== String(currentLike?._id)
    )!;
    if (currentPost != null) {
        currentPost.likes = filterLike;
        currentPost?.markModified("likes");
    }
    currentLike?.remove();
    currentPost?.save();
    currentUser?.save();

    io.emit("like_removed", currentLike)

    res.json(currentPost);
};
