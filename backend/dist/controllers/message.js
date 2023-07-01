var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/users";
import Chat from "../models/chat";
import Message from "../models/message";
import { io } from "../app";
import makeAnObjectID from "../utilities/makeAnObjectId";
import checkChatHistory from "../utilities/checkChatHistory";
export function getUserMessages(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        const userMessages = yield Message.find({ to: user_id });
        res.json(userMessages);
    });
}
export function getMessages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { chat_id } = req.params;
        const messages = yield Message.find({ chat_id: chat_id });
        res.json(messages);
    });
}
export function createMessages(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        const { message, to } = req.body;
        const { chat_id } = req.params;
        //Query each corresponds users
        const currrentUser = yield User.findById(user_id);
        const otherUser = yield User.findById(to);
        //Make new object for new message.
        const new_message = {
            _id: makeAnObjectID(),
            from: user_id,
            to: to,
            message_text: message,
            created_at: new Date().toString(),
            isEdited: false,
            isRead: false,
            chat_id: makeAnObjectID(chat_id),
        };
        //create a new message
        const newMessage = new Message(new_message);
        const newMessagesId = newMessage._id;
        yield Chat.findByIdAndUpdate(chat_id, {
            $push: { messages: newMessagesId },
        });
        yield newMessage.save();
        // Check chat history between correspond users
        const isOtherUserExistInCurrentUserChatList = yield checkChatHistory(String(user_id), String(to));
        if (!isOtherUserExistInCurrentUserChatList) {
            currrentUser === null || currrentUser === void 0 ? void 0 : currrentUser.chatLists.push({
                chat_with: to,
                chatID: makeAnObjectID(chat_id),
            });
        }
        const isCurrentUserExistInOtherChatList = yield checkChatHistory(String(to), String(user_id));
        if (!isCurrentUserExistInOtherChatList) {
            otherUser === null || otherUser === void 0 ? void 0 : otherUser.chatLists.push({
                chat_with: user_id,
                chatID: makeAnObjectID(chat_id),
            });
        }
        currrentUser === null || currrentUser === void 0 ? void 0 : currrentUser.save();
        otherUser === null || otherUser === void 0 ? void 0 : otherUser.save();
        io.to(to).to(String(user_id)).emit("private_message", new_message);
        res.json(newMessage);
    });
}
export function editMessage(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_id = String((_a = req.user) === null || _a === void 0 ? void 0 : _a._id);
            const { message_id } = req.params;
            const { message, chat_with_id } = req.body;
            const findEditMessage = yield Message.findById(message_id);
            const editedMessage = {
                _id: findEditMessage === null || findEditMessage === void 0 ? void 0 : findEditMessage._id,
                from: user_id,
                to: chat_with_id,
                message_text: message,
                created_at: new Date(),
                isEdited: true,
                isRead: findEditMessage === null || findEditMessage === void 0 ? void 0 : findEditMessage.isRead,
                chat_id: findEditMessage === null || findEditMessage === void 0 ? void 0 : findEditMessage.chat_id,
            };
            io.to(chat_with_id).to(user_id).emit("message_edit", editedMessage);
            yield Message.findByIdAndUpdate(message_id, {
                $set: { message_text: message, isEdited: true },
            });
            res.json({ status: true });
        }
        catch (error) {
            console.log(error);
            res.json({ status: false });
        }
    });
}
export function deleteMessage(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user_id = String((_a = req.user) === null || _a === void 0 ? void 0 : _a._id);
            const { chat_id, message_id } = req.params;
            const deleteMessage = yield Message.findById(message_id);
            const to = String(deleteMessage === null || deleteMessage === void 0 ? void 0 : deleteMessage.to);
            yield Chat.findByIdAndUpdate(chat_id, {
                $pull: { messages: message_id },
            });
            //delete the message from DB
            deleteMessage === null || deleteMessage === void 0 ? void 0 : deleteMessage.delete();
            io.to(to).to(user_id).emit("message_delete", deleteMessage);
            res.json({ status: true, message_id: deleteMessage === null || deleteMessage === void 0 ? void 0 : deleteMessage._id });
        }
        catch (error) {
            console.log(error);
            res.json({ status: false });
        }
    });
}
