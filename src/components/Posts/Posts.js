import Card from "../../UI/Card/Card";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  return (
    <main className={styles.section}>
      <Card>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <p style={{textAlign: "center"}}>You've reached the end!</p>
      </Card>
    </main>
  );
};

export default Posts;
