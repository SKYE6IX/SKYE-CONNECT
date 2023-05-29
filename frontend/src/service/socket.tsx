import { io, Socket } from 'socket.io-client';

let socket: Socket;
export default function getSocket() {
  if (!socket) {
    socket = io(process.env.API_URL, {
      withCredentials: true,
      // autoConnect: false
    });
  }
  return socket;
}
