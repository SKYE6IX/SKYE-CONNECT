var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import methodOveride from "method-override";
import session from "express-session";
import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
    transports: ["polling"],
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});
const PORT = 8080;
const dbUrl = "mongodb://localhost:27017/SKYE-CONNECTv2";
// All Routes
import userRouter from "./routes/users";
import postRouter from "./routes/posts";
import commentRouter from "./routes/comment";
import likeRouter from "./routes/likes";
import chatRouter from "./routes/chat";
import messageRouter from "./routes/message";
//sockets
import runSoket from "./socket";
import User from "./models/users";
// //connect mongoose to mongo db
mongoose.set("strictQuery", false);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect(dbUrl)
            .then(() => {
            console.log("Database Connected");
        })
            .catch((err) => {
            console.log(`Oh No Error Connecting... Reason is ${err}`);
        });
    });
}
run();
//this give access to the data from the form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOveride("_method")); //This help to overide method from middleware
app.use(cookieParser());
//Cors settings
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
//Applying Middlewares//
app.use(cors(corsOptions)); //helping with cross-origin
//Session configure
const secret = "thisshouldbeasecretokay"; //secret key
const store = MongoStore.create({
    mongoUrl: dbUrl,
    //@ts-ignore
    secret,
    touchAfter: 24 * 60 * 60,
});
store.on("error", function (e) {
    console.log(`error occur in session data store CODE:${e}`);
});
const sessionMiddleware = session({
    store,
    name: "skye-connect-session",
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
});
//APPLYING SESSION FOR APP
app.use(sessionMiddleware);
//initialize passport for usage
app.use(passport.initialize());
// //Apply Session to the passport
app.use(passport.session());
//connecting passport-local with user schema
passport.use(new localStrategy(User.authenticate()));
//Get user into a session to make them stay log in
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//CONNECTING SESSION TO SOCKET.IO
// Convert a connect middleware to a Socket.IO middleware
const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));
//allowing only auth user to connect to socket // TODO: PROBALY WILL CHANGE LATER CAUSE OF NOTIFCATION
io.use((socket, next) => {
    const session = socket.request;
    if (session.isAuthenticated()) {
        next();
    }
    else {
        next(new Error("unauthorized"));
    }
});
app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/posts", commentRouter);
app.use("/posts", likeRouter);
app.use("/chat", chatRouter, messageRouter);
//Run Socket
runSoket();
app.use(function (err, req, res, next) {
    res.status(err.status || 500).send(err.message);
});
server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
