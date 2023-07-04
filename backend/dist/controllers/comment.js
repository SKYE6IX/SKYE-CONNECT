var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Comment from "../models/comment";
import Post from "../models/posts";
import { io } from "../app";
//Fetch all commment for each post
export const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Query all comment relate to the post ID only
    const postComments = yield Comment.find({ post: id }).populate("author");
    res.json(postComments);
});
//Create new comment
export const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Query the actual Post
    const { id } = req.params;
    const currentPost = yield Post.findById(id);
    // Create new comment
    const { content } = req.body;
    const newComment = new Comment({
        content: content,
        post: currentPost === null || currentPost === void 0 ? void 0 : currentPost._id,
        author: req.user,
        created_at: new Date().toString(),
    });
    const newCommentID = newComment.id;
    currentPost === null || currentPost === void 0 ? void 0 : currentPost.comments.push(newCommentID);
    newComment.save();
    currentPost === null || currentPost === void 0 ? void 0 : currentPost.save();
    io.emit("comment_created", newComment);
    res.json(newComment);
});
export const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Query the actual Post
    const { id, commentID } = req.params;
    yield Post.findByIdAndUpdate(id, { $pull: { comments: commentID } });
    const commentDeleted = yield Comment.findById(commentID);
    commentDeleted === null || commentDeleted === void 0 ? void 0 : commentDeleted.delete();
    io.emit("comment_deleted", commentDeleted);
    res.json(commentDeleted);
});
