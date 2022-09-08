import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { Menu } from "./Menu/Menu";

type PropsType = {
  userId: null | number;
  login: null | string;
  userpic: null | string;
};

export function Header(props: PropsType) {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu
        className={styles.menu}
        userId={props.userId}
        login={props.login}
        userpic={props.userpic}
      />
    </header>
  );
}
