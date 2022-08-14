import { PostType } from "../../../redux/state";
import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

type PropsType = {
  state: PostType[];
};

export function Posts(props: PropsType) {
  const postsElements = props.state.map((post) => (
    <Post text={post.text} likesCount={post.likesCount} />
  ));

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <textarea placeholder="Type text here..."></textarea>
      <button className="button my-posts__form-button">Add post</button>

      <ul>{postsElements}</ul>
    </div>
  );
}
