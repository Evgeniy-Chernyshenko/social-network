import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
