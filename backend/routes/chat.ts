import { Router } from "express";
import { createNewChat, removeChatHistory, deleteChat } from "../controllers/chat";

const chatRouter = Router();

chatRouter.route("/:chat_with_id").post(createNewChat);
chatRouter.route("/:chat_id/:chat_with_id")
    .put(removeChatHistory)
    .delete(deleteChat)
;

export default chatRouter;
