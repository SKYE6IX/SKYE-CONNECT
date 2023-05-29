var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ExpressError } from "./utilities/ExpressError";
import { postSchema, commentSchema, userSchema } from "./SchemasValidation";
import Post from "./models/posts";
import Comment from "./models/comment";
//Validate sign in form
export const validateSignInForm = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(401).json({
            status: false,
            message: "Username or password are missing",
        });
    }
    else {
        next();
    }
};
// Authetication to validate if user can do something
export const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        throw new Error("You are not Autheticated");
    }
    next();
};
// Middleware validation to check the user is relate to post before be able to to delete,edit,update.
export const isPostAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        const posts = yield Post.findById(id);
        if (!(posts === null || posts === void 0 ? void 0 : posts.author.equals((_a = req.user) === null || _a === void 0 ? void 0 : _a._id))) {
            throw new Error("You have no permission for this action");
        }
        next();
    }
    catch (err) {
        next(err);
    }
});
//Middleware to validate if user is owner of the comment before be able to delete
export const isCommentAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { commentID } = req.params;
        const comments = yield Comment.findById(commentID);
        if (!(comments === null || comments === void 0 ? void 0 : comments.author.equals((_b = req.user) === null || _b === void 0 ? void 0 : _b._id))) {
            throw new Error("You have no permison for this action");
        }
        next();
    }
    catch (err) {
        next(err);
    }
});
//Validate  creeeate new Post on server side
export const validatePost = (req, res, next) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(msg, 400);
    }
    else {
        next();
    }
};
//Validate  create new comment on server side
export const validateComment = (req, res, next) => {
    const { error } = commentSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(msg, 400);
    }
    else {
        next();
    }
};
//Validate creeate new User om server side
export const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(msg, 400);
    }
    else {
        next();
    }
};
