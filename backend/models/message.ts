import { Schema, model, Types } from "mongoose";

export interface IMessage {
    _id: Types.ObjectId;
    from: Types.ObjectId;
    to: Types.ObjectId;
    message_text: string;
    created_at: Date;
    chat_id: Types.ObjectId
};

const messageSchema = new Schema<IMessage>({
    _id: Schema.Types.ObjectId,
    from: { type: Schema.Types.ObjectId, ref: "User" },
    to: { type: Schema.Types.ObjectId, ref: "User" },
    message_text: { type: String, required: true },
    created_at: { type: Date, required: true },
    chat_id: { type: Schema.Types.ObjectId, ref: "Chat" }
}, { toJSON: { getters: true } });


const Message = model<IMessage>("Message", messageSchema);

export default Message