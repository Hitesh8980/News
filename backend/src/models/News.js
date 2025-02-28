const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, enum: ["Tech", "Business", "Sports"], required: true },
  createdAt: { type: Date, default: Date.now },
});

// Index for trending news query optimization
newsSchema.index({ createdAt: -1 });

module.exports = mongoose.model("News", newsSchema);
