import styles from "./Post.module.css";

type PropsType = {
  text: string;
  likesCount: number;
};

export function Post(props: PropsType) {
  return (
    <li className={styles.post}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs88c7rnLrdFSbs_JBfIqfiKn8z3N67DSqw&usqp=CAU"
        alt="Avatar"
      />
      <p>{props.text}</p>
      <div>👍 {props.likesCount}</div>
    </li>
  );
}
