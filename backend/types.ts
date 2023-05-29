import { Types } from "mongoose";
const requiredServerEnvs = [
    "DB_URL",
    "CLOUDINARY_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_SECRET_KEY",
] as const;

type RequiredServerEnvKeys = (typeof requiredServerEnvs)[number];
declare global {
    namespace NodeJS {
        interface ProcessEnv extends Record<RequiredServerEnvKeys, string> { }
    }
}

export { };


export interface IPhoto {
    url: string;
    filename: string;
}
export interface IUser {
    _id: Types.ObjectId;
    avatar: IPhoto;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: Date;
    country: string;
    city: string;
    languages: string[];
    professional: string;
    about_me: string;
    posts: Types.ObjectId[];
    likePosts: Types.ObjectId[];
    created_at: Date;
    followers: Types.ObjectId[];
    following: Types.ObjectId[];
    chatLists: Array<{
        chat_with: Types.ObjectId;
        chatID: Types.ObjectId
    }>
}
