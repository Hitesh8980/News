import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews, addNews } from "../redux/newSlice";
import { fetchNews } from "../api/newsApi";
import socket from "../socket/socket";
import NewsCard from "../components/NewsCard";
import CategorySelector from "../components/CategorySelector";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);

  useEffect(() => {
    const loadNews = async () => {
      const newsData = await fetchNews(selectedCategory);
      dispatch(setNews(newsData));
    };

    loadNews();

    socket.on("connect", () => console.log("Connected to WebSocket ✅"));
    socket.on("disconnect", () => console.log("Disconnected ❌"));
    socket.on("newsUpdate", (newArticle) => {
      console.log("New article received:", newArticle);
      if (selectedCategory === "All" || newArticle.category === selectedCategory) {
        dispatch(addNews(newArticle));
      }
    });

    return () => {
      socket.off("newsUpdate");
    };
  }, [dispatch, selectedCategory]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Real-Time News Feed</h1>
      <CategorySelector />
      <div style={styles.newsList}>
        {articles.length > 0 ? (
          articles.map((article) => <NewsCard key={article._id} article={article} />)
        ) : (
          <p>No news available for this category.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  newsList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Home;
