var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Chat from "../models/chat";
import User from "../models/users";
import makeAnObjectID from "../utilities/makeAnObjectId";
import checkChatHistory from "../utilities/checkChatHistory";
export function createNewChat(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { chat_with_id } = req.params;
        const current_user_id = String((_a = req.user) === null || _a === void 0 ? void 0 : _a._id);
        const correspondUsers = [makeAnObjectID(current_user_id), makeAnObjectID(chat_with_id)];
        //Check if corresPondsUsers have a chat 
        const isCorrespondUserExist = (yield Chat.find({})).find(chat => {
            return correspondUsers.every(user => chat.chat_room.includes(user));
        });
        if (isCorrespondUserExist) {
            res.json(isCorrespondUserExist);
        }
        else {
            const newChat = new Chat({
                creted_at: new Date(),
                chat_room: correspondUsers
            });
            yield newChat.save();
            res.json(newChat);
        }
    });
}
;
//Remove chat from the user
export function removeChatHistory(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { chat_id, chat_with_id } = req.params;
            const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
            const currrentUser = yield User.findById(user_id);
            //First check if user exist in other user chatList...
            const isChatExistInOtherUserChatList = yield checkChatHistory(chat_with_id, String(user_id));
            const removedChatFromCurrentUser = currrentUser === null || currrentUser === void 0 ? void 0 : currrentUser.chatLists.filter(chatList => {
                return String(chatList.chat_with) !== chat_with_id;
            });
            if (isChatExistInOtherUserChatList) {
                if (currrentUser != null) {
                    currrentUser.chatLists = removedChatFromCurrentUser;
                    currrentUser.markModified("chatLists");
                }
            }
            else {
                if (currrentUser != null) {
                    currrentUser.chatLists = removedChatFromCurrentUser;
                    currrentUser.markModified("chatLists");
                }
                yield Chat.findByIdAndDelete(chat_id);
            }
            ;
            currrentUser === null || currrentUser === void 0 ? void 0 : currrentUser.save();
            res.json({ status: true });
        }
        catch (error) {
            console.log(error);
            res.json({ status: false });
        }
    });
}
;
// Delete Chat history for both user along with the chat and messages
export function deleteChat(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
            const { chat_id, chat_with_id } = req.params;
            const currrentUser = yield User.findById(user_id);
            const otherUser = yield User.findById(chat_with_id);
            const removedChatFromCurrentUser = currrentUser === null || currrentUser === void 0 ? void 0 : currrentUser.chatLists.filter(chatList => {
                return String(chatList.chat_with) !== chat_with_id;
            });
            const removedChatFromOtherUser = otherUser === null || otherUser === void 0 ? void 0 : otherUser.chatLists.filter(chatList => {
                return String(chatList.chat_with) !== String(user_id);
            });
            if (currrentUser != null && otherUser != null) {
                currrentUser.chatLists = removedChatFromCurrentUser;
                otherUser.chatLists = removedChatFromOtherUser;
                currrentUser.markModified("chatLists");
                otherUser.markModified("chatLists");
            }
            ;
            yield Chat.findByIdAndDelete(chat_id);
            currrentUser === null || currrentUser === void 0 ? void 0 : currrentUser.save();
            otherUser === null || otherUser === void 0 ? void 0 : otherUser.save();
            res.json({ status: true });
        }
        catch (error) {
            console.log(error);
            res.json({ status: false });
        }
    });
}
// Automatic delete empty chat with no message after view hours
// async function deleteIdleChatWithNoMessage() {
//     const idleChats = (await Chat.find({})).filter(chat => chat.messages.length === 0);
//     if (idleChats) {
//         idleChats.forEach(async (idleChat) => {
//             await Chat.findByIdAndRemove(idleChat._id)
//         })
//     };
// };
// const timeDelay = 60 * 60 * 24;
// setInterval(() => {
//     deleteIdleChatWithNoMessage()
// }, timeDelay)
