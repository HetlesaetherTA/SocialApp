import React, { useContext, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Layout/Header/Header";
import CreatePostPage from "./components/CreatePostPage/CreatePostPage";
import Posts from "./components/Posts/Posts";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import PostProvider from "./store/PostProvider";
import PostContext from "./store/post-context";

// Remove TEST
function App(props) {
  // STATIC USER ID FOR PRODUCTION
  const user_id = 1;
  // STATIC USER ID FOR PRODUCTION   
  const postCtx = useContext(PostContext)

  const [showProfile, setShowProfile] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  const toggleShowProfileHandler = () => {
    if (showProfile === false) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  };

  const toggleShowCreatePostHandler = () => {
    if (showCreatePost === false) {
      setShowCreatePost(true);
    } else {
      setShowCreatePost(false);
    }
  };

  let classes;

  if (showProfile || showCreatePost) {
    classes = styles.noScroll;
  }

  const addPostHandler = (message, date) => {
    postCtx.addPost({
      poser_id: user_id,
      message: message,
      id: Math.floor(Math.random() * 2**16),
      likes: 0,
      comments: [],
      date: date
    })
    setShowCreatePost(false)
  }

  return (
    <PostProvider>
      {showProfile && <ProfilePage onToggleProfile={toggleShowProfileHandler}/>}
      {showCreatePost && <CreatePostPage onSubmitPost={addPostHandler} onToggleCreatePost={toggleShowCreatePostHandler}/>}
      <div className={classes}>
        <Header onToggleProfile={toggleShowProfileHandler} onToggleCreatePost={toggleShowCreatePostHandler}/>
        <Posts />
      </div>
    </PostProvider>
  );
}

export default App;
