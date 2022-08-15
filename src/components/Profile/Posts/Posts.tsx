import React from "react";
import { AddPostType, PostType } from "../../../redux/state";
import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

type PropsType = {
  state: PostType[];
  addPost: AddPostType;
};

export function Posts(props: PropsType) {
  const textareaRef = React.createRef<HTMLTextAreaElement>();

  const postsElements = props.state.map((post) => (
    <Post key={post.id} text={post.text} likesCount={post.likesCount} />
  ));

  const onAddPostClickHandler = () => {
    if (textareaRef.current) {
      const clearText = textareaRef.current.value.trim();
      clearText && props.addPost(clearText);
      textareaRef.current.value = "";
    }
  };

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <textarea ref={textareaRef} placeholder="Type text here..."></textarea>
      <button
        className="button my-posts__form-button"
        onClick={onAddPostClickHandler}
      >
        Add post
      </button>

      <ul>{postsElements}</ul>
    </div>
  );
}
