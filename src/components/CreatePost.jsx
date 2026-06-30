import { useContext, useRef } from "react";
import { PostList } from "../store/postListStore";

const CreatePost = ({ setselectedtab }) => {
  const { addpost } = useContext(PostList);
  const useridelement = useRef();
  const posttitleelement = useRef();
  const postbodyelement = useRef();
  const reactionselement = useRef();
  const tagselement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userid = useridelement.current.value;
    const posttitle = posttitleelement.current.value;
    const postbody = postbodyelement.current.value;
    const reactions = reactionselement.current.value;
    const tags = tagselement.current.value.split(" ");
    if (userid && posttitle && postbody && reactions && tags) {
      addpost(userid, posttitle, postbody, reactions, tags);
      setselectedtab("Home");
      alert("Posted Successfully.");
    } else {
      alert("Enter all the required fileds.");
    }
  };
  return (
    <>
      <form className="createpost" onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Enter your UserId
          </label>
          <input
            ref={useridelement}
            type="text"
            className="form-control"
            id="userid"
            placeholder="Your Userid"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={posttitleelement}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling Today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postbodyelement}
            type="text"
            rows="8"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            ref={reactionselement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many reactions of this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hastags here
          </label>
          <input
            ref={tagselement}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
