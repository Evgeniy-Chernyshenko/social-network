import { NavLink } from "react-router-dom";
import { AppStateType } from "../../../redux/redux-store";
import styles from "./DialogItem.module.css";

type PropsType = {
  user: AppStateType["dialogsPage"]["users"][number];
};

export function DialogItem(props: PropsType) {
  return (
    <li className={styles.container}>
      <img src={props.user.userPic} alt={props.user.name} />
      <NavLink
        to={`/dialogs/${props.user.id}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {props.user.name}
      </NavLink>
    </li>
  );
}
