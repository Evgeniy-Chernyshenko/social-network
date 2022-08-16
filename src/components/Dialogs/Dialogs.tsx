import { DialogsPageType } from "../../redux/store";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { MessageItem } from "./MessageItem/MessageItem";

type PropsType = {
  dialogsPage: DialogsPageType;
};

export function Dialogs(props: PropsType) {
  const dialogItems = props.dialogsPage.users.map((user) => (
    <DialogItem user={user} />
  ));
  const messageItems = props.dialogsPage.messages.map((message) => (
    <MessageItem message={message} />
  ));

  return (
    <div className={styles.dialogs}>
      <ul className={styles.users}>{dialogItems}</ul>
      <div className={styles.messages}>{messageItems}</div>
    </div>
  );
}
