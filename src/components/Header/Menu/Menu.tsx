import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  login: null | string;
  logout: () => void;
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
          <>{props.login}</>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
      {props.login && <li onClick={props.logout}>Logout</li>}
    </ul>
  );
}
