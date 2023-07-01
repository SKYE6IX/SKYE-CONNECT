import { Request, Response } from "express";
import User from "../models/users";
import Chat from "../models/chat";
import Message from "../models/message";
import { io } from "../app";
import type { IMessage } from "../models/message";
import makeAnObjectID from "../utilities/makeAnObjectId";
import checkChatHistory from "../utilities/checkChatHistory";

export async function getUserMessages(req: Request, res: Response) {
    const user_id = req.user?._id!;
    const userMessages = await Message.find({ to: user_id });
    res.json(userMessages);
}

export async function getMessages(req: Request, res: Response) {
    const { chat_id } = req.params;
    const messages = await Message.find({ chat_id: chat_id });
    res.json(messages);
}

export async function createMessages(req: Request, res: Response) {
    const user_id = req.user?._id!;
    const { message, to } = req.body;
    const { chat_id } = req.params;

    //Query each corresponds users
    const currrentUser = await User.findById(user_id);
    const otherUser = await User.findById(to);

    //Make new object for new message.
    const new_message: IMessage = {
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
    await Chat.findByIdAndUpdate(chat_id, {
        $push: { messages: newMessagesId },
    });

    await newMessage.save();

    // Check chat history between correspond users
    const isOtherUserExistInCurrentUserChatList = await checkChatHistory(
        String(user_id),
        String(to)
    );

    if (!isOtherUserExistInCurrentUserChatList) {
        currrentUser?.chatLists.push({
            chat_with: to,
            chatID: makeAnObjectID(chat_id),
        });
    }

    const isCurrentUserExistInOtherChatList = await checkChatHistory(
        String(to),
        String(user_id)
    );
    if (!isCurrentUserExistInOtherChatList) {
        otherUser?.chatLists.push({
            chat_with: user_id,
            chatID: makeAnObjectID(chat_id),
        });
    }

    currrentUser?.save();
    otherUser?.save();

    io.to(to).to(String(user_id)).emit("private_message", new_message);

    res.json(newMessage);
}

export async function editMessage(req: Request, res: Response) {
    try {
        const user_id = String(req.user?._id);
        const { message_id } = req.params;
        const { message, chat_with_id } = req.body;

        const findEditMessage = await Message.findById(message_id);
        const editedMessage = {
            _id: findEditMessage?._id,
            from: user_id,
            to: chat_with_id,
            message_text: message,
            created_at: new Date(),
            isEdited: true,
            isRead: findEditMessage?.isRead,
            chat_id: findEditMessage?.chat_id,
        };

        io.to(chat_with_id).to(user_id).emit("message_edit", editedMessage);

        await Message.findByIdAndUpdate(message_id, {
            $set: { message_text: message, isEdited: true },
        });

        res.json({ status: true });
    } catch (error) {
        console.log(error);
        res.json({ status: false });
    }
}

export async function deleteMessage(req: Request, res: Response) {
    try {
        const user_id = String(req.user?._id);
        const { chat_id, message_id } = req.params;

        const deleteMessage = await Message.findById(message_id);
        const to = String(deleteMessage?.to);
        await Chat.findByIdAndUpdate(chat_id, {
            $pull: { messages: message_id },
        });
        //delete the message from DB
        deleteMessage?.delete();

        io.to(to).to(user_id).emit("message_delete", deleteMessage);

        res.json({ status: true, message_id: deleteMessage?._id });
    } catch (error) {
        console.log(error);
        res.json({ status: false });
    }
}
