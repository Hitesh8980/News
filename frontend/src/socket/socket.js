import { io } from "socket.io-client";

const socket = io("http://localhost:5003", {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});

export default socket;
