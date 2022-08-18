import { ChangeEvent } from "react";
import {
  addPostAC,
  DispatchType,
  PostType,
  updateNewPostTextAC,
} from "../../../redux/store";
import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

type PropsType = {
  posts: PostType[];
  newPostText: string;
  dispatch: DispatchType;
};

export function Posts(props: PropsType) {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} text={post.text} likesCount={post.likesCount} />
  ));

  const onAddPostClickHandler = () => {
    props.dispatch(addPostAC());
  };

  const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostTextAC(e.currentTarget.value));
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
