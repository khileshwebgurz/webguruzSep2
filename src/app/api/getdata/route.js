import dbConnect from "../../../../lib/mongodb";
import Post from "../../../../models/Post";
import redis from "../../../../lib/redis";

export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Get the page and limit from query parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1; // Default to page 1
    const limit = parseInt(url.searchParams.get("limit")) || 10; // Default to 10 posts per page
    const skip = (page - 1) * limit;

    // Create a cache key with pagination details
    const cacheKey = `posts:page:${page}:limit:${limit}`;
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      console.log("Cache hit for key:", cacheKey);
      return new Response(cachedData, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    console.log("Cache miss for key:", cacheKey);

    // Fetch the posts with pagination
    const totalPosts = await Post.countDocuments({});
    const posts = await Post.find({}).skip(skip).limit(limit);

    // Calculate total pages
    const totalPages = Math.ceil(totalPosts / limit);

    // Prepare the response
    const responseData = JSON.stringify({
      success: true,
      data: posts,
      currentPage: page,
      totalPages,
    });

    // Cache the response data for 1 hour
    await redis.set(cacheKey, responseData, 'EX', 3600); // Cache for 1 hour
    return new Response(responseData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch data",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
