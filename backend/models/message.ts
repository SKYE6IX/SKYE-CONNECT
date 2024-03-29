import { Schema, model, Types } from "mongoose";

export interface IMessage {
    _id: Types.ObjectId;
    from: Types.ObjectId;
    to: Types.ObjectId;
    message_text: string;
    created_at: string;
    isEdited: boolean;
    isRead: boolean;
    chat_id: Types.ObjectId;
}

const messageSchema = new Schema<IMessage>(
    {
        _id: Schema.Types.ObjectId,
        from: { type: Schema.Types.ObjectId, ref: "User" },
        to: { type: Schema.Types.ObjectId, ref: "User" },
        message_text: { type: String, required: true },
        created_at: { type: String, required: true },
        isEdited: { type: Boolean, required: true },
        isRead: { type: Boolean, required: true },
        chat_id: { type: Schema.Types.ObjectId, ref: "Chat" },
    },
    { toJSON: { getters: true } }
);

const Message = model<IMessage>("Message", messageSchema);

export default Message;
