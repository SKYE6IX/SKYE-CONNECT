import { Schema, model, Types } from "mongoose";

interface IComment {
    content: string;
    post: Types.ObjectId;
    author: Types.ObjectId;
    created_at: string;
}

const CommentSchema = new Schema<IComment>({
    content: String,
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    created_at: { type: String, required: true },
});

const Comment = model<IComment>("Comment", CommentSchema);

export default Comment;
