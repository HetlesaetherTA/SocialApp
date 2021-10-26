import { useContext } from "react";
import PostContext from "../../store/post-context";
import Card from "../../UI/Card/Card";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const postCtx = useContext(PostContext)

  const posts = (
     (
      <div>
        {postCtx.items.map((item) => (
          <Post
          poster_id={item.poster_id}
          key={item.id}
          id={item.id}
          message={item.message}
          comments={item.comments}
          likes={item.likes}
          date={item.date}
            />
        ))}
      </div>
    )
  )

  return (
    <main className={styles.section}>
      <Card>
      {posts}
        <p style={{textAlign: "center"}}>You've reached the end!</p>
      </Card>
    </main>
  );
};

export default Posts;
