import { Schema, model } from "mongoose";
const likeSchema = new Schema({
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
});
const Like = model("Like", likeSchema);
export default Like;
