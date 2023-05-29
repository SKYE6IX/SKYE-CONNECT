import { Schema, model, Types } from "mongoose";

interface IComment {
    content: string;
    post: Types.ObjectId;
    author: Types.ObjectId;
}

const CommentSchema = new Schema<IComment>({
    content: String,
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
});

const Comment = model<IComment>("Comment", CommentSchema);

export default Comment;
