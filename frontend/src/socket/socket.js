import { io } from "socket.io-client";

const socket = io("http://localhost:5003/", {
  transports: ["websocket", "polling"],
  reconnectionAttempts: 5,
  timeout: 5000,
});

export default socket;
