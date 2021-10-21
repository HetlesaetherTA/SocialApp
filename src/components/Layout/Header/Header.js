import styles from "./Header.module.css";
import Profile from "./Profile/Profile";
import CreatePost from "./CreatePost/CreatePost";
import Logo from "../../../assets/SVGs/Logo";

const Header = (props) => {
  const refreshPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.header}>
      <span className={styles.profile}>
        <Profile />
      </span>
      <span onClick={refreshPage} className={styles.logo}>
        <Logo/>
      </span>
      <span className={styles.create_post}>
        <CreatePost />
      </span>
    </div>
  );
};

export default Header;
