import { Schema, model, Types } from "mongoose";
import Message from "./message";

export interface IChat {
    _id: Types.ObjectId;
    messages: Array<Types.ObjectId>;
    chat_room: Array<Types.ObjectId>
    creted_at: Date;
};

const chatSchema = new Schema<IChat>({
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
    creted_at: { type: Date, required: true },
    chat_room: [{ type: Schema.Types.ObjectId, ref: "User" }]
});


chatSchema.post("findOneAndDelete", async function (doc: IChat) {
    if (doc) {
        await Message.deleteMany({
            chat_id: {
                $in: doc._id
            }
        })
    }
});

const Chat = model<IChat>("Chat", chatSchema);

export default Chat





