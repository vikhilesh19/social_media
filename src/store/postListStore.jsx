import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  addinitialposts: () => {},
  deletepost: () => {},
});

const postlistreducer = (currpostlist, action) => {
  let newpostlist = currpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currpostlist.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newpostlist = currpostlist.length > 0 ? currpostlist : action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currpostlist];
  }
  return newpostlist;
};

const PostListProvider = ({ children }) => {
  const addpost = (userid, posttitle, postbody, reactions, tags) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reactions,
        userid,
        tags,
      },
    });
  };
  const addinitialposts = (posts) => {
    const formattedPosts = posts.map((post) => ({
      ...post,
      reactions: post.reactions.likes + post.reactions.dislikes,
    }));

    dispatchpostlist({
      type: "ADD_INITIAL_POSTS",
      payload: { posts: formattedPosts },
    });
  };
  const deletepost = (id) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  const [postList, dispatchpostlist] = useReducer(postlistreducer, []);

  return (
    <PostList.Provider
      value={{ postList, addpost, addinitialposts, deletepost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
