import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postListStore";
import Welcomemsg from "./Welcomemsg";
import LoadingSpinner from "./LoadingSpinner";
const Postlist = () => {
  const { postList, addinitialposts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    if (postList.length > 0) {
      setfetching(false);
      return;
    }

    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addinitialposts(data.posts);
        setfetching(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch posts:", error);
        }
        setfetching(false);
      });

    return () => {
      controller.abort();
    };
  }, [postList.length, addinitialposts]);
  const handlegetpostclick = () => {};
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcomemsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default Postlist;
