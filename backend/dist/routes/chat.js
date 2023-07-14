import { Router } from "express";
import { createNewChat, removeChatHistory, deleteChat, } from "../controllers/chat";
import catchAsync from "../utilities/catchAsync";
import { isLoggedIn } from "../middleware";
const chatRouter = Router();
chatRouter.route("/:chat_with_id").post(isLoggedIn, catchAsync(createNewChat));
chatRouter
    .route("/:chat_id/:chat_with_id")
    .put(isLoggedIn, catchAsync(removeChatHistory))
    .delete(isLoggedIn, catchAsync(deleteChat));
export default chatRouter;
