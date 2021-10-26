import HeartIcon from "../../../assets/SVGs/HeartIcon";
import CommentIcon from "../../../assets/SVGs/CommentIcon";
import styles from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={styles.post}>
          <span className={styles.message}>{props.message}</span>

          <span className={styles.date}>{props.date}</span>
          <div className={styles.engagement}>
          <div className={styles.heart_icon}>
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
}

export default Post;