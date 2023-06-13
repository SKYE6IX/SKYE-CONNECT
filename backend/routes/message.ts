import { Router } from "express";
import {
    createMessages,
    getMessages,
    deleteMessage,
    editMessage,
} from "../controllers/message";

const messageRouter = Router();

messageRouter.route("/message/:chat_id").get(getMessages).post(createMessages);
messageRouter.route("/message/:chat_id/:message_id").delete(deleteMessage);
messageRouter.route("/message/:message_id/update").put(editMessage);
export default messageRouter;
