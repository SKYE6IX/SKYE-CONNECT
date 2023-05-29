import { Schema, model, Types } from "mongoose";
import Comment from "./comment";
import Like from "./likes";

interface IPhotos {
    url: string;
    filename?: string;
}
interface IPost {
    content: string;
    photos: Array<IPhotos>;
    author: Types.ObjectId;
    comments: Array<Types.ObjectId>;
    likes: Array<Types.ObjectId>;
}



const PhotoSchema = new Schema<IPhotos>({
    url: String,
    filename: String,
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


PhotoSchema.virtual("thumbnail").get(function () {
    return this.url.replace("/upload", "/upload/q_50")
});

const PostSchema = new Schema<IPost>({
    content: String,
    photos: [PhotoSchema],
    author: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
});

PostSchema.post("remove", async function (doc: IPost) {
    if (doc) {
        await Comment.deleteMany({
            _id: {
                $in: doc.comments,
            },
        });
        await Like.deleteMany({
            _id: {
                $in: doc.likes,
            },
        });
    }
});

const Post = model<IPost>("Post", PostSchema);

export default Post;
