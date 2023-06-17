import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/posts";
import User from "../models/users";
//Get all list of post
export const allPost = async (req: Request, res: Response) => {
    const allPost = await Post.find({}).populate("comments").populate("author");
    res.json(allPost);
};

//Get a single post
export const getSinglePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const singlePost = await Post.findById(id).populate("author");
    res.json(singlePost);
};

//Creating new post
export const createPost = async (req: Request, res: Response) => {
    const userID = req.user?._id!;
    const currentUser = await User.findById(userID);
    const { content } = req.body;
    const post = new Post({ content });
    const files = req.files as Express.Multer.File[];
    if (files) {
        const images = files.map((f) => ({
            url: f.path,
            filename: f.filename,
        }));
        post.photos = images;
    }
    post.author = userID;
    currentUser?.posts.push(post.id);
    await currentUser?.save();
    await post.save();
    res.send("Post Created");
};

//Delete post
export const deletePost = async (req: Request, res: Response) => {
    const userID = req.user?._id!;
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post?.photos.length) {
        for (let filenames of post.photos) {
            const publicID = filenames.filename!;
            cloudinary.uploader
                .destroy(publicID)
                .then((res) => console.log(res));
        }
    }
    //Remove the post from Users also
    await User.findByIdAndUpdate(userID, { $pull: { posts: id } });
    post?.remove();
    res.send("Post successfully Deleted");
};
