import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postListStore";
import Welcomemsg from "./Welcomemsg";
import LoadingSpinner from "./LoadingSpinner";
const Postlist = () => {
  const { postList, addinitialposts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialposts(data.posts);
        setfetching(false);
      });
  }, []);
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
