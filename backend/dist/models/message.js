import { Schema, model } from "mongoose";
const messageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    from: { type: Schema.Types.ObjectId, ref: "User" },
    to: { type: Schema.Types.ObjectId, ref: "User" },
    message_text: { type: String, required: true },
    created_at: { type: Date, required: true },
    isEdited: { type: Boolean, required: true },
    isRead: { type: Boolean, required: true },
    chat_id: { type: Schema.Types.ObjectId, ref: "Chat" },
}, { toJSON: { getters: true } });
const Message = model("Message", messageSchema);
export default Message;
