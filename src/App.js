import styles from "./App.module.css";
import Header from "./components/Layout/Header/Header"
import Posts from "./components/Posts/Posts"
import Modal from "./UI/Modal/Modal";

const DEFAULT_POSTS = [
  {
    id: 1,
    message: "Today was a good day!",
    comments: 3,
    likes: 8,
  },
  {
    id: 2,
    message: "Happy birthday Snoop Dawg O G-G",
    comments: 723,
    likes: 1769,
  },
]

function App() {
  return (
    <body className={styles.app}>
      <Modal/>
      <Header />
      <Posts />
    </body>
  );
}

export default App;
