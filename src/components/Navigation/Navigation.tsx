import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/dialogs"
          >
            Dialogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
