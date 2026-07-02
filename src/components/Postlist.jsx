import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postListStore";
import Welcomemsg from "./Welcomemsg";
const Postlist = () => {
  const { postList, addinitialposts } = useContext(PostListData);
  const [datafetch, setdatafetch] = useState(false);
  if (!datafetch) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialposts(data.posts);
      });
    setdatafetch(true);
  }
  const handlegetpostclick = () => {};
  return (
    <>
      {postList.length === 0 && <Welcomemsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Postlist;
