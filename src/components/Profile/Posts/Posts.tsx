import { ChangeEvent } from "react";
import { AppStateType } from "../../../redux/redux-store";
import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

type PropsType = {
  posts: AppStateType["profilePage"]["posts"];
  newPostText: AppStateType["profilePage"]["newPostText"];
  updateNewPostText: (newPostText: string) => void;
  addPost: () => void;
};

export function Posts(props: PropsType) {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} text={post.text} likesCount={post.likesCount} />
  ));

  const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value);
  };

  const onAddPostClickHandler = () => {
    props.addPost();
  };

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <textarea
        placeholder="Type text here..."
        onChange={changeNewPostTextHandler}
        value={props.newPostText}
      ></textarea>
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
