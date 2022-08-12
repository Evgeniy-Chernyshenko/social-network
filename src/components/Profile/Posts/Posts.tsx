import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

export function Posts() {
  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <textarea placeholder="Type text here..."></textarea>
      <button className="button my-posts__form-button">Add post</button>

      <ul>
        <Post text="Post 1" likesCount={1} />
        <Post text="Post 2" likesCount={2} />
        <Post text="Post 2" likesCount={3} />
      </ul>
    </div>
  );
}
