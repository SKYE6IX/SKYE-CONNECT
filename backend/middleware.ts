import { Request, Response, NextFunction } from "express";
import { ExpressError } from "./utilities/ExpressError";
import { postSchema, commentSchema, userSchema } from "./SchemasValidation";
import Post from "./models/posts";
import Comment from "./models/comment";

//Validate sign in form
export const validateSignInForm = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(401).json({
            status: false,
            message: "Username or password are missing",
        });
    } else {
        next();
    }
};

// Authetication to validate if user can do something
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
        throw new Error("You are not Autheticated");
    }
    next();
};

// Middleware validation to check the user is relate to post before be able to to delete,edit,update.
export const isPostAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const posts = await Post.findById(id);
        if (!posts?.author.equals(req.user?._id!)) {
            throw new Error("You have no permission for this action");
        }
        next();
    } catch (err) {
        next(err);
    }
};

//Middleware to validate if user is owner of the comment before be able to delete
export const isCommentAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { commentID } = req.params;
        const comments = await Comment.findById(commentID);
        if (!comments?.author.equals(req.user?._id!)) {
            throw new Error("You have no permison for this action");
        }
        next();
    } catch (err) {
        next(err);
    }
};

//Validate  create new Post on server side
export const validatePost = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
        const msg = error.details
            .map((el: { message: any }) => el.message)
            .join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};

//Validate  create new comment on server side
export const validateComment = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { error } = commentSchema.validate(req.body);
    if (error) {
        const msg = error.details
            .map((el: { message: any }) => el.message)
            .join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};
//Validate creeate new User on server side
export const validateUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        const msg = error.details
            .map((el: { message: any }) => el.message)
            .join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};
