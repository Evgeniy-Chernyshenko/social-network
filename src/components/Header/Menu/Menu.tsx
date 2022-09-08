import styles from "./Menu.module.css";

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  userId: null | number;
  login: null | string;
  userpic: null | string;
};

export function Menu(props: PropsType) {
  const className = [
    styles.container,
    ...(props.className ? [props.className] : []),
  ].join(" ");

  return (
    <ul className={className}>
      <li className={styles.userItem}>
        {props.login ? (
          <>
            {props.login}
            {props.userpic && <img src={props.userpic} alt={props.login} />}
          </>
        ) : (
          <>Login</>
        )}
      </li>
    </ul>
  );
}
