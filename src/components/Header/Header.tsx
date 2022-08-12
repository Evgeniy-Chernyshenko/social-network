import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
