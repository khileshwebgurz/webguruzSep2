// src/lib/blogsData.js
import dbConnect from './mongodb';
import Post from '../models/Post';

export async function getBlogData(pageNumber = 1, postsPerPage = 10) {
  await dbConnect();

  // Calculate the starting point for the data
  const skip = (pageNumber - 1) * postsPerPage;

  // Fetch the total number of posts
  const totalPosts = await Post.countDocuments();

  // Fetch the paginated posts
  const paginatedPosts = await Post.find({})
    .skip(skip)
    .limit(postsPerPage)
    .lean(); // .lean() returns plain JavaScript objects instead of Mongoose documents


    // Convert _id to a string
  const sanitizedPosts = paginatedPosts.map(post => ({
    ...post,
    _id: post._id.toString(),
  }));


  // Calculate total pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Return the paginated data
  return {
    posts: sanitizedPosts, // For RecentPost component
    paginatedPosts: sanitizedPosts, // For AllPost component
    totalPages,
    currentPage: pageNumber,
  };
}
