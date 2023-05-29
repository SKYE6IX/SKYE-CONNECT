var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model } from "mongoose";
import Message from "./message";
;
const chatSchema = new Schema({
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
    creted_at: { type: Date, required: true },
    chat_room: [{ type: Schema.Types.ObjectId, ref: "User" }]
});
chatSchema.post("findOneAndDelete", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (doc) {
            yield Message.deleteMany({
                chat_id: {
                    $in: doc._id
                }
            });
        }
    });
});
const Chat = model("Chat", chatSchema);
export default Chat;
