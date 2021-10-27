import HeartIcon from "../../../assets/SVGs/HeartIcon";
import CommentIcon from "../../../assets/SVGs/CommentIcon";
import styles from "./Post.module.css";
import { useContext, useState } from "react";
import PostContext from "../../../store/post-context";

const Post = (props) => {
  const [ postLiked, setPostLiked] = useState(false)
  const postCtx = useContext(PostContext);

  const onLikeButtonClick = () => {
    postCtx.addLike({
      id: props.id,
      likes: props.likes,
      liked: postLiked,
    });

    if (postLiked === false) {
      setPostLiked(true);
    } else {
      setPostLiked(false);
    }
  };

  return (
    <div className={styles.post}>
      <span className={styles.message}>{props.message}</span>
      <span className={styles.date}>{props.date}</span>
      <div className={styles.engagement}>
    <div onClick={onLikeButtonClick} className={`${styles.heart_icon} ${postLiked && styles.heart_highlighted}`}>
          <HeartIcon />
        </div>
        <span>{props.likes}</span>
        <div className={styles.comment_icon}>
          <CommentIcon />
        </div>
        <span>{props.comments.length}</span>
      </div>
    </div>
  );
};

export default Post;
