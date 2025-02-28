import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [], // Stores the fetched news articles
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
    },
    addNews: (state, action) => {
      state.articles.unshift(action.payload); 
    },
  },
});

export const { setNews, addNews } = newsSlice.actions;
export default newsSlice.reducer;
