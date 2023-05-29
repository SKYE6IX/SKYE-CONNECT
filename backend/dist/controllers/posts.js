var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/posts";
import User from "../models/users";
//Get all list of post
export const allPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPost = yield Post.find({}).populate("comments").populate("author");
    res.json(allPost);
});
//Get a single post
export const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singlePost = yield Post.findById(id);
    res.json(singlePost);
});
//Creating new post
export const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
    const currentUser = yield User.findById(userID);
    const { content } = req.body;
    const post = new Post({ content });
    const files = req.files;
    if (files) {
        const images = files.map((f) => ({
            url: f.path,
            filename: f.filename,
        }));
        post.photos = images;
    }
    post.author = userID;
    currentUser === null || currentUser === void 0 ? void 0 : currentUser.posts.push(post.id);
    yield (currentUser === null || currentUser === void 0 ? void 0 : currentUser.save());
    yield post.save();
    res.send("Post Created");
});
//Delete post
export const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const userID = (_b = req.user) === null || _b === void 0 ? void 0 : _b._id;
    const { id } = req.params;
    const post = yield Post.findById(id);
    if (post === null || post === void 0 ? void 0 : post.photos.length) {
        for (let filenames of post.photos) {
            const publicID = filenames.filename;
            cloudinary.uploader
                .destroy(publicID)
                .then((res) => console.log(res));
        }
    }
    //Remove the post from Users also
    yield User.findByIdAndUpdate(userID, { $pull: { posts: id } });
    post === null || post === void 0 ? void 0 : post.remove();
    res.send("Post successfully Deleted");
});
