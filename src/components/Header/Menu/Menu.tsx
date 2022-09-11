import styles from "./Menu.module.css";

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  login: null | string;
};

export function Menu(props: PropsType) {
  const className = [
    styles.container,
    ...(props.className ? [props.className] : []),
  ].join(" ");

  return (
    <ul className={className}>
      <li className={styles.userItem}>
        {props.login ? <>{props.login}</> : <>Login</>}
      </li>
    </ul>
  );
}
