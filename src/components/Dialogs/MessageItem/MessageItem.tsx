import { MessageType } from "../../../redux/store";
import styles from "./MessageItem.module.css";

type PropsType = {
  message: MessageType;
};

export function MessageItem(props: PropsType) {
  return (
    <div className={styles.container}>
      <img src={props.message.userPic} alt={props.message.userName} />
      <p>{props.message.text}</p>
    </div>
  );
}
