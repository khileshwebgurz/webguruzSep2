const axios = require("axios");
const mongoose = require("mongoose");
// const cron = require('node-cron');

// MongoDB connection
const mongoURI = "mongodb://admin:QCkm96wlffVIC4O@103.163.58.156:27017"; // Replace with your MongoDB URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the schema and model
const postSchema = new mongoose.Schema({
  slug: String,
  title: Object,
  content: Object,
  excerpt: Object,
  acf: Object,
  yoast_head_json: Object,
  date: String
});

const Post = mongoose.model("Post", postSchema);

// Function to fetch and store posts
async function fetchAndStorePosts(page = 1) {
  try {
    const perPage = 10; // Number of posts per page
    const response = await axios.get(
      `https://webguruz.in/wp-json/wp/v2/posts/?page=${page}&per_page=${perPage}`
    );

    // Save posts to MongoDB
    for (const post of response.data) {
      const existingPost = await Post.findOne({ id: post.id });
      if (!existingPost) {
        const newPost = new Post(post);
        await newPost.save();
        console.log(`Saved post: ${post.id}`);
      } else {
        console.log(`Post already exists: ${post.id}`);
      }
    }

    // Pagination
    const totalPages = parseInt(response.headers["x-wp-totalpages"], 10);
    if (page < totalPages) {
      await fetchAndStorePosts(page + 1);
    } else {
      console.log("All posts have been fetched and stored.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Run the fetch and store function
fetchAndStorePosts().then(() => mongoose.connection.close());

