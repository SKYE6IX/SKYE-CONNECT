import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const AvatarSchema = new Schema({
    url: String,
    filename: String,
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
AvatarSchema.virtual("thumbnail").get(function () {
    return this.url.replace("/upload", "/upload/w_0.5,ar_1,c_thumb,g_faces,z_0.7/r_max,q_50");
});
const HeaderCoverSchema = new Schema(Object.assign({}, AvatarSchema.obj));
const UserSchema = new Schema({
    avatar: AvatarSchema,
    header_cover: HeaderCoverSchema,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    country: String,
    city: String,
    professional: String,
    about_me: String,
    languages: [String],
    relationship: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    likePosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    created_at: {
        type: Date,
        required: true,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    chatLists: [
        {
            chat_with: { type: Schema.Types.ObjectId, ref: "User" },
            chatID: { type: Schema.Types.ObjectId, ref: "Chat" },
        },
    ],
});
//Using passport plugin to make a user and password for us, which will be hash before storing to data base;
UserSchema.plugin(passportLocalMongoose, {
    errorMessages: {
        UserExistsError: "A USER WITH GIVEN NAME ALREADY EXIST",
        IncorrectPasswordError: "PASSWORD OR USERNAME ARE INCORRECT",
    },
});
const User = model("User", UserSchema);
export default User;
