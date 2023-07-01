import { Request } from "express";
import { io } from "../app";
import Message from "../models/message";

const runSoket = () => {
    //SOCKET CONNEECTIONS
    io.on("connection", (socket) => {
        //WHEN USER LOG IN
        console.log("User Connected");

        const session = socket.request as Request;
        const user_id = String(session.user?._id);
        socket.join(user_id);

        //PRIVATE MESSAGE SETUP START //
        // typing status
        socket.on("typing:start", (data: { to: string }) => {
            socket.to(data.to).emit("typingResponse", { status: true });
        });
        socket.on("typing:stop", (data: { to: string }) => {
            socket.to(data.to).emit("typingResponse", { status: false });
        });

        //message read status
        socket.on(
            "is_message_read",
            async (data: { message_id: string; from: string }) => {
                await Message.findByIdAndUpdate(data.message_id, {
                    $set: { isRead: true },
                });
                const updatedMessage = await Message.findById(data.message_id);
                socket
                    .to(data.from)
                    .emit("is_message_read_res", updatedMessage);
            }
        );

        //Send a notification to the user;
        socket.on(
            "on_message_sent",
            async (data: { to: string; message_id: string }) => {
                setTimeout(async () => {
                    const message = await Message.findById(data.message_id);
                    socket
                        .to(data.to)
                        .emit("new_message_notification", message);
                }, 1000);
            }
        );
        ////PRIVATE MESSAGE SETUP END //

        //WHEN USER LOGOUT
        socket.on("disconnect", () => {
            console.log("User Disconnected");
        });
    });
};

export default runSoket;
