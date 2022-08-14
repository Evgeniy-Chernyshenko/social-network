import { MessageType } from "../../../redux/state";
import styles from "./MessageItem.module.css";

type PropsType = {
  state: MessageType;
};

export function MessageItem(props: PropsType) {
  return (
    <div className={styles.container}>
      <img src={props.state.userPic} alt={props.state.userName} />
      <p>{props.state.text}</p>
    </div>
  );
}
