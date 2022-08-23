import { AppStateType } from "../../../redux/redux-store";
import styles from "./MessageItem.module.css";

type PropsType = {
  message: AppStateType["dialogsPage"]["messages"][number];
};

export function MessageItem(props: PropsType) {
  return (
    <div className={styles.container}>
      <img src={props.message.userPic} alt={props.message.userName} />
      <p>{props.message.text}</p>
    </div>
  );
}
