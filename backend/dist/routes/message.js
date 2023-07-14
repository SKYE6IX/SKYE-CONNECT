import { Router } from "express";
import { createMessages, getMessages, deleteMessage, editMessage, getUserMessages, } from "../controllers/message";
import catchAsync from "../utilities/catchAsync";
const messageRouter = Router();
messageRouter.route("/message").get(catchAsync(getUserMessages));
messageRouter
    .route("/message/:chat_id")
    .get(catchAsync(getMessages))
    .post(catchAsync(createMessages));
messageRouter
    .route("/message/:chat_id/:message_id")
    .delete(catchAsync(deleteMessage));
messageRouter.route("/message/:message_id/update").put(catchAsync(editMessage));
export default messageRouter;
