import { Socket } from "socket.io";
import Comment from "../../models/comment";

export default function () {
    return {
        createComment: async function (
            payload: any,
            callback: (res: any) => void
        ) {
            //@ts-ignore
            const socket: Socket = this;

            callback({
                status: payload
            })
            console.log(payload)
            socket.emit("create_comment", payload)
        },
        getComment: async function (
            callback: (res: any) => void
        ) {
            callback({
                name: "Mike"
            })
        }
    }
}











