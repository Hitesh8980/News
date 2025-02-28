# 📰 Real-Time News Application  

## 📌 Project Overview  
This is a **Real-Time News Application** built using **React, Redux, Node.js, Express, MongoDB, and Socket.io**. The platform allows users to view news articles in different categories and receive real-time updates when new articles are published.  

## 🚀 Features  
- 🔹 **Fetch Latest News** – Users can view the latest news articles from different categories.  
- 🔹 **Category Filtering** – Users can filter news by category (Tech, Business, Sports).  
- 🔹 **Real-Time Updates** – News articles are updated instantly via **Socket.io**.  
- 🔹 **RESTful API** – Backend serves news data efficiently using **MongoDB** and **Express.js**.  
- 🔹 **Redux for State Management** – Handles application state for smooth user experience.  
- 🔹 **Swagger API Documentation** – Provides structured API docs for backend endpoints.  

## 🎯 Running the App  
- Start the backend server (`npm start` in the backend folder).  
- Start the frontend (`npm run dev` in the frontend folder).  
- Open **http://localhost:5173** to access the frontend.  
- API runs at **http://localhost:5003/api/news**.  

## 📖 API Endpoints  
| Method | Endpoint               | Description             |
|--------|------------------------|------------------------|
| GET    | `/api/news`            | Fetch latest news      |
| POST   | `/api/news`            | Add a new news article |
| GET    | `/api/news/trending`   | Get trending news      |

## 🤝 Contribution  
Feel free to fork and contribute! Create a pull request if you improve or fix any part of the project.  

