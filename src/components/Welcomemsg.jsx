const Welcomemsg = ({ ongetpostclick }) => {
  return (
    <center className="Welcomemsg">
      <h1>There are no posts.</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={ongetpostclick}
      >
        Get Post From Server
      </button>
    </center>
  );
};
export default Welcomemsg;
