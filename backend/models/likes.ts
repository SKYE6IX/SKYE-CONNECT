import { Schema, model, Types } from "mongoose";

interface ILike {
    post: Types.ObjectId;
    author: Types.ObjectId;
}

const likeSchema = new Schema<ILike>({
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
});

const Like = model<ILike>("Like", likeSchema);

export default Like;
