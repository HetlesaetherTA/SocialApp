import Modal from "../../UI/Modal/Modal";
import styles from "./ProfilePage.module.css";
import profileimg from "../../assets/Images/profileimg.jpg";
import CameraIcon from "../../assets/SVGs/CameraIcon";

const ProfilePage = (props) => {
  return (
    <Modal onClose={props.onToggleProfile}>
      <div className={styles.profile_page}>

        <img
          src="https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeOVLMNrDcXfgMttdVTqxu8ubAhHA9GgpFjIGciCp_zLRrHJTruGSOf8XDLvOFdxag_ZBCrS5ERAOyWXPbndFFLLQtcZ.jpg?r=895"
          alt="background"
          className={styles.background_img}
        ></img>

        <div className={styles.overlay}><div className={styles.icon}><CameraIcon/></div></div>

        <img
          className={styles.profile_img}
          src={profileimg}
          alt="profile"
        ></img>

        <div className={styles.post_history}>
            
        </div>
        <span style={{textAlign: "center"}}>Post history</span>
      </div>
    </Modal>
  );
};

export default ProfilePage;
