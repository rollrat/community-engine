const mongo = require("../api/mongo");

const m_post_article_schema = new mongo.Schema({
  id: Number,
  title: String,
  author: String,
  body: String,
  password: String,
  boardid: Number,
  published_date: { type: Date, default: Date.now },
});
const m_post_article_model = mongo.model("post.article", m_post_article_schema);

module.exports = {
  mongo: m_post_article_model,
};
