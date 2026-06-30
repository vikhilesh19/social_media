import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postListStore";
const Post = ({ post }) => {
  const { deletepost } = useContext(PostList);
  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete
                className="delete"
                onClick={() => deletepost(post.id)}
              />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post is Reacted by {post.reactions} People.
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
