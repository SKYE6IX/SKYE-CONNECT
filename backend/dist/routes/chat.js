import { Router } from "express";
import { createNewChat, removeChatHistory, deleteChat, } from "../controllers/chat";
import catchAsync from "../utilities/catchAsync";
const chatRouter = Router();
chatRouter.route("/:chat_with_id").post(catchAsync(createNewChat));
chatRouter
    .route("/:chat_id/:chat_with_id")
    .put(catchAsync(removeChatHistory))
    .delete(catchAsync(deleteChat));
export default chatRouter;
