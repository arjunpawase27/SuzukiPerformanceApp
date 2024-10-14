import axios from 'axios';

export const fetchPosts = async (page) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchPostDetails = async (postId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post details:', error);
    return null;
  }
};
