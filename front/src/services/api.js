import axios from "axios";

const baseUrl = 'http://localhost:3001';

export const getPosts = async () => {
  try {
    const posts = await axios.get(
      baseUrl + "/posts"
    )
    return posts;
  } catch (error) {
    throw new Error();
  }
}

export const addPost = async (post) => {
  try {
    const newPost = await axios.post(baseUrl + "/posts", post);
    return newPost;
  }catch (error) {
    throw new Error()
  }
}

export const deletePost = async (postId) => {
  try {
    const deletedPost = await axios.delete(baseUrl + "/posts/" + postId);
    return deletedPost;
  }catch (error) {
    throw new Error()
  }
}
