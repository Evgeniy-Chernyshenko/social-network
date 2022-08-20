import { ChangeEvent } from "react";
import { StateType } from "../../../redux/redux-store";
import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

type PropsType = {
  posts: StateType["profilePage"]["posts"];
  newPostText: string;
  updateNewPostTexCallback: (newPostText: string) => void;
  addPostCallback: () => void;
};

export function Posts(props: PropsType) {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} text={post.text} likesCount={post.likesCount} />
  ));

  const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostTexCallback(e.currentTarget.value);
  };

  const onAddPostClickHandler = () => {
    props.addPostCallback();
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
