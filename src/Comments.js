import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "./redux/actions";
import uniqid from "uniqid";
import { useState, useEffect } from "react";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  useEffect(() => {
    dispatch(commentsLoad());
  },[dispatch]);

  const handleInput = (event) => {
    setTextComment(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
