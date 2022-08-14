import { DialogsPageType } from "../../redux/state";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { MessageItem } from "./MessageItem/MessageItem";

type PropsType = {
  state: DialogsPageType;
};

export function Dialogs(props: PropsType) {
  const dialogItems = props.state.users.map((user) => (
    <DialogItem state={user} />
  ));
  const messageItems = props.state.messages.map((message) => (
    <MessageItem state={message} />
  ));

  return (
    <div className={styles.dialogs}>
      <ul className={styles.users}>{dialogItems}</ul>
      <div className={styles.messages}>{messageItems}</div>
    </div>
  );
}
