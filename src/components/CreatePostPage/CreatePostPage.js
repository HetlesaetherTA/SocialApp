import { useEffect, useState } from "react";
import Modal from "../../UI/Modal/Modal";
import styles from "./CreatePostPage.module.css";
import submitDate from "./SubmitDate";

const CreatePostPage = (props) => {
  const characterLimit = 300;

  const [postMessage, setPostMessage] = useState("");
  const [postValid, setPostValid] = useState(true);
  const [pHeightlight, setPHeightlight] = useState(false);

  const postMessageHandler = (event) => {
    setPostMessage(event.target.value);
  };

  useEffect(() => {
    if (postMessage.length < characterLimit + 1) {
      setPostValid(true);
    } else {
      setPostValid(false);
    }
  }, [postMessage]);

  const submitMessageHandler = (event) => {
    if (event.type === "keydown") {
      if (event.key !== "Enter" || event.shiftKey !== false) {
        return;
      } 
    }

    event.preventDefault()
    
    if (postMessage.trim() === "") {
      return;
    }

    if (postValid === true) {
      props.onSubmitPost(postMessage, submitDate());
    } else {
      setPHeightlight(true);

      const timer = setTimeout(() => {
        setPHeightlight(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  };

  const pStyles = `${!postValid && styles.invalid} ${
    pHeightlight ? styles.bump : ""
  } `;
  return (
    <Modal onClose={props.onToggleCreatePost}>
      <form
        onSubmit={submitMessageHandler}
        onKeyDown={submitMessageHandler}
        className={styles.create_post}
      >
        <span>What's on your mind?</span>
        <textarea autoFocus onChange={postMessageHandler}></textarea>
        <button type="submit">Post</button>
        <p className={pStyles}>
          {characterLimit - postMessage.length} more characters available
        </p>
      </form>
    </Modal>
  );
};

export default CreatePostPage;
