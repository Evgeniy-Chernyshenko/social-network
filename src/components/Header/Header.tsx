import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { Menu } from "./Menu/Menu";

type PropsType = {
  login: null | string;
};

export function Header(props: PropsType) {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu className={styles.menu} login={props.login} />
    </header>
  );
}
