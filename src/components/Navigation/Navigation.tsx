import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="#" className={styles.active}>
            Link 1
          </a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
        <li>
          <a href="#">Link 5</a>
        </li>
      </ul>
    </nav>
  );
}
