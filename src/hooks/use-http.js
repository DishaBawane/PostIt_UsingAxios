import { useState, useEffect } from "react";

import postItAPI from "../apis/postItAPI";

const usePostHttp = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await postItAPI.get("/classes/PostIt", {
        params: {
          limit: 5,
        },
      });
      setPosts(response.data.results);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  /*logic to post new data*/
  const submitPost = async (data) => {
    setIsLoading(true);
    const response = await postItAPI.post("/classes/PostIt", data);
    const newPostId = response.data.objectId;
    const fetchNewPost = await postItAPI.get(`/classes/PostIt/${newPostId}`);
    setPosts((oldData) => [fetchNewPost.data, ...oldData]);
    setIsLoading(false);
  };

  return [posts, submitPost, isLoading,error];
};

export default usePostHttp;
