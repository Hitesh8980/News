import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div style={styles.card}>
      {article.image && <img src={article.image} alt={article.title} style={styles.image} />}
      <div style={styles.content}>
        <h3 style={styles.title}>{article.title}</h3>
        <p style={styles.description}>{article.description}</p>
        <p style={styles.category}>{article.category}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  content: {
    marginTop: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  category: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#FF6F61",
    marginTop: "5px",
  },
};

export default NewsCard;
