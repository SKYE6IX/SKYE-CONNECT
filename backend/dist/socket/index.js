var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { io } from "../app";
import Message from "../models/message";
const runSoket = () => {
    //SOCKET CONNEECTIONS
    io.on("connection", (socket) => {
        var _a;
        //WHEN USER LOG IN
        console.log("User Connected");
        const session = socket.request;
        const user_id = String((_a = session.user) === null || _a === void 0 ? void 0 : _a._id);
        socket.join(user_id);
        //PRIVATE MESSAGE SETUP START //
        // typing status
        socket.on("typing:start", (data) => {
            socket.to(data.to).emit("typingResponse", { status: true });
        });
        socket.on("typing:stop", (data) => {
            socket.to(data.to).emit("typingResponse", { status: false });
        });
        //message read status
        socket.on("is_message_read", (data) => __awaiter(void 0, void 0, void 0, function* () {
            yield Message.findByIdAndUpdate(data.message_id, {
                $set: { isRead: true },
            });
            const updatedMessage = yield Message.findById(data.message_id);
            socket
                .to(data.from)
                .emit("is_message_read_res", updatedMessage);
        }));
        //Send a notification to the user;
        socket.on("on_message_sent", (data) => __awaiter(void 0, void 0, void 0, function* () {
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                const message = yield Message.findById(data.message_id);
                socket
                    .to(data.to)
                    .emit("new_message_notification", message);
            }), 1000);
        }));
        ////PRIVATE MESSAGE SETUP END //
        //WHEN USER LOGOUT
        socket.on("disconnect", () => {
            console.log("User Disconnected");
        });
    });
};
export default runSoket;
