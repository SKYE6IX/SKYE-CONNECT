var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model } from "mongoose";
import Comment from "./comment";
import Like from "./likes";
const PhotoSchema = new Schema({
    url: String,
    filename: String,
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
PhotoSchema.virtual("thumbnail").get(function () {
    return this.url.replace("/upload", "/upload/q_50");
});
const PostSchema = new Schema({
    content: String,
    photos: [PhotoSchema],
    author: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
    created_at: { type: String, required: true },
});
PostSchema.post("remove", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (doc) {
            yield Comment.deleteMany({
                _id: {
                    $in: doc.comments,
                },
            });
            yield Like.deleteMany({
                _id: {
                    $in: doc.likes,
                },
            });
        }
    });
});
const Post = model("Post", PostSchema);
export default Post;
