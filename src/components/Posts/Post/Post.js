import HeartIcon from "../../../assets/SVGs/HeartIcon";
import CommentIcon from "../../../assets/SVGs/CommentIcon";
import styles from "./Post.module.css";

const Post = () => {
    return (
        <div className={styles.post}>
          <span className={styles.message}>I did not fuck my cat. I did not cum on my cat. I did not put my dick anywhere near my cat. I have never done anything weird with my cat. I told myself I wouldn’t make any more apology videos after last year so I’m trying to be as short and honest with this as possible.</span>

          <span className={styles.date}>6:22 PM · Oct 8, 2021</span>
          <div className={styles.engagement}>
          <div className={styles.heart_icon}>
            <HeartIcon />
          </div>
          <span>3</span>
          <div className={styles.comment_icon}>
            <CommentIcon />
            </div>
          <span>5</span>
          </div>
        </div>
      );
}

export default Post;