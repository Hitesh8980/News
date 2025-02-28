const News = require("../models/News");

// Add a new news article
exports.addNews = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const news = new News({ title, content, category });
    await news.save();

    // Emit real-time news update
    if (req.io) {
      req.io.to(category).emit("newsUpdate", news);
    }

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
}

};

// Get latest news
exports.getLatestNews = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== "All" ? { category } : {};
    const news = await News.find(filter).sort({ createdAt: -1 }).limit(10);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get trending news using aggregation
exports.getTrendingNews = async (req, res) => {
  try {
    const trendingNews = await News.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);
    res.status(200).json(trendingNews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
