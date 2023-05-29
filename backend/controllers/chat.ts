import { Request, Response } from "express";
import Chat from "../models/chat";
import User from "../models/users";
import makeAnObjectID from "../utilities/makeAnObjectId";
import checkChatHistory from "../utilities/checkChatHistory";

export async function createNewChat(req: Request, res: Response) {
    const { chat_with_id } = req.params
    const current_user_id = String(req.user?._id);
    const correspondUsers = [makeAnObjectID(current_user_id), makeAnObjectID(chat_with_id)];
    //Check if corresPondsUsers have a chat 
    const isCorrespondUserExist = (await Chat.find({})).find(chat => {
        return correspondUsers.every(user => chat.chat_room.includes(user))
    });

    if (isCorrespondUserExist) {
        res.json(isCorrespondUserExist)
    } else {
        const newChat = new Chat({
            creted_at: new Date(),
            chat_room: correspondUsers
        });
        await newChat.save();
        res.json(newChat)
    }
};

//Remove chat from the user
export async function removeChatHistory(req: Request, res: Response) {
    try {
        const { chat_id, chat_with_id } = req.params;
        const user_id = req.user?._id!;
        const currrentUser = await User.findById(user_id);

        //First check if user exist in other user chatList...
        const isChatExistInOtherUserChatList = await checkChatHistory(chat_with_id, String(user_id));

        const removedChatFromCurrentUser = currrentUser?.chatLists.filter(chatList => {
            return String(chatList.chat_with) !== chat_with_id
        })!

        if (isChatExistInOtherUserChatList) {
            if (currrentUser != null) {
                currrentUser.chatLists = removedChatFromCurrentUser;
                currrentUser.markModified("chatLists");
            }
        } else {
            if (currrentUser != null) {
                currrentUser.chatLists = removedChatFromCurrentUser;
                currrentUser.markModified("chatLists");
            }
            await Chat.findByIdAndDelete(chat_id)
        };
        currrentUser?.save();
        res.json({ status: true })
    } catch (error) {
        console.log(error)
        res.json({ status: false })
    }
};


// Delete Chat history for both user along with the chat and messages
export async function deleteChat(req: Request, res: Response) {
    try {
        const user_id = req.user?._id!;
        const { chat_id, chat_with_id } = req.params;

        const currrentUser = await User.findById(user_id);
        const otherUser = await User.findById(chat_with_id);

        const removedChatFromCurrentUser = currrentUser?.chatLists.filter(chatList => {
            return String(chatList.chat_with) !== chat_with_id
        })!;
        const removedChatFromOtherUser = otherUser?.chatLists.filter(chatList => {
            return String(chatList.chat_with) !== String(user_id)
        })!;


        if (currrentUser != null && otherUser != null) {

            currrentUser.chatLists = removedChatFromCurrentUser;
            otherUser.chatLists = removedChatFromOtherUser;

            currrentUser.markModified("chatLists");
            otherUser.markModified("chatLists");
        };

        await Chat.findByIdAndDelete(chat_id);

        currrentUser?.save();
        otherUser?.save();

        res.json({ status: true })

    } catch (error) {
        console.log(error)
        res.json({ status: false })
    }
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




