import { Schema, model } from "mongoose";
const CommentSchema = new Schema({
    content: String,
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
});
const Comment = model("Comment", CommentSchema);
export default Comment;
