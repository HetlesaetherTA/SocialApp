import profileimg from "../../../../assets/Images/profileimg.jpg";
import styles from "./Profile.module.css";

const Profile = (props) => {

  return (
    <div>
      <div onClick={props.onProfileClick} className={styles.profile_overlay}></div>
      <img className={styles.profile} src={profileimg} alt="profile"></img>
    </div>
  );
};

export default Profile;
