import { Request, Response } from "express";
import Comment from "../models/comment";
import Post from "../models/posts";
import { io } from "../app";

//Fetch all commment for each post
export const getComments = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Query all comment relate to the post ID only
    const postComments = await Comment.find({ post: id }).populate("author");
    res.json(postComments);
};
//Create new comment
export const createComment = async (req: Request, res: Response) => {
    //Query the actual Post
    const { id } = req.params;
    const currentPost = await Post.findById(id);
    // Create new comment
    const { content } = req.body;
    const newComment = new Comment({
        content: content,
        post: currentPost?._id,
        author: req.user,
    });
    const newCommentID = newComment.id;
    currentPost?.comments.push(newCommentID);

    newComment.save();
    currentPost?.save();

    io.emit("comment_created", newComment);

    res.json(newComment);
};

export const deleteComment = async (req: Request, res: Response) => {
    //Query the actual Post
    const { id, commentID } = req.params;
    await Post.findByIdAndUpdate(id, { $pull: { comments: commentID } });
    const commentDeleted = await Comment.findById(commentID);
    commentDeleted?.delete();
    io.emit("comment_deleted", commentDeleted);
    res.json(commentDeleted);
};
