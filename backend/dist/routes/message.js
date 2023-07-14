import { Router } from "express";
import { createMessages, getMessages, deleteMessage, editMessage, getUserMessages, } from "../controllers/message";
import catchAsync from "../utilities/catchAsync";
import { isLoggedIn } from "../middleware";
const messageRouter = Router();
messageRouter.route("/message").get(isLoggedIn, catchAsync(getUserMessages));
messageRouter
    .route("/message/:chat_id")
    .get(isLoggedIn, catchAsync(getMessages))
    .post(isLoggedIn, catchAsync(createMessages));
messageRouter
    .route("/message/:chat_id/:message_id")
    .delete(isLoggedIn, catchAsync(deleteMessage));
messageRouter
    .route("/message/:message_id/update")
    .put(isLoggedIn, catchAsync(editMessage));
export default messageRouter;
