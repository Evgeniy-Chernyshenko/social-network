import { NavLink } from "react-router-dom";
import { MessageType, UserType } from "../../../redux/state";
import styles from "./DialogItem.module.css";

type PropsType = {
  state: UserType;
};

export function DialogItem(props: PropsType) {
  return (
    <li className={styles.container}>
      <img src={props.state.userPic} alt={props.state.name} />
      <NavLink
        to={`/dialogs/${props.state.id}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {props.state.name}
      </NavLink>
    </li>
  );
}
