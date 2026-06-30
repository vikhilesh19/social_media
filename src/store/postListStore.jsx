import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletepost: () => {},
});

const postlistreducer = (currpostlist, action) => {
  let newpostlist = currpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currpostlist.filter((post) => post.id !== action.payload.id);
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
  const deletepost = (id) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  const [postList, dispatchpostlist] = useReducer(
    postlistreducer,
    DEFAULT_POST_LIST,
  );

  return (
    <PostList.Provider value={{ postList, addpost, deletepost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "1st Post",
    body: "Hai hello this is my first Post",
    reactions: 10,
    userid: "user-9",
    tags: ["1stPost", "Chill", "Hai"],
  },
  {
    id: 2,
    title: "2nd Post",
    body: "Hai hello this is my second Post",
    reactions: 15,
    userid: "user-9",
    tags: ["2ndPost", "Chill", "Hai"],
  },
];

export default PostListProvider;
