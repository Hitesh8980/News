const express = require("express");
const { addNews, getLatestNews, getTrendingNews } = require("../controllers/newsController");

const router = express.Router();

router.post("/", addNews);
router.get("/", getLatestNews);
router.get("/trending", getTrendingNews);

module.exports = router;
