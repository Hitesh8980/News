require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./src/config/db");
const newsRoutes = require("./src/routes/newsRoutes");
const swaggerDocs = require("./src/config/swagger");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174", 
    methods: ["GET", "POST"]
  },
});

// Middleware
app.use(express.json());
app.use(cors());
swaggerDocs(app);
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api/news", newsRoutes);

// WebSockets - Handle real-time updates
io.on("connection", (socket) => {
    console.log("New client connected");
  
    socket.on("subscribe", (category) => {
      socket.join(category);
      console.log(`Client subscribed to ${category}`);
    });
  
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

// Database Connection
connectDB();

// Start Server
const PORT = process.env.PORT || 5003;
server.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
