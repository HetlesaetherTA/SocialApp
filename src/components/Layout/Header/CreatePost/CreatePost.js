import styles from "./CreatePost.module.css"

const CreatePost = (props) => {
  return (
    <button onClick={props.onCreatePostClick} className={styles.create_post__button}>
      <span>Create Post</span>
    </button>
  );
};

export default CreatePost;
