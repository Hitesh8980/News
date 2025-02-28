import axios from "axios";

export const fetchNews = async (category) => {
  try {
    const response = await axios.get(
      category && category !== "All"
        ? `http://localhost:5003/api/news?category=${category}`
        : `http://localhost:5003/api/news`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
