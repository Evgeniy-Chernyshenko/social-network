import { ChangeEvent } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { DialogsPropsType } from "./DialogsContainer";
import { MessageItem } from "./MessageItem/MessageItem";

export function Dialogs(props: DialogsPropsType) {
  const dialogItems = props.dialogsPage.users.map((user) => (
    <DialogItem key={user.id} user={user} />
  ));
  const messageItems = props.dialogsPage.messages.map((message) => (
    <MessageItem key={message.id} message={message} />
  ));

  const changeNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageTextCallback(e.currentTarget.value);
  };

  const onAddMessageClickHandler = () => {
    props.addMessageCallback();
  };

  return (
    <div className={styles.dialogs}>
      <ul className={styles.users}>{dialogItems}</ul>
      <div className={styles.messages}>
        <div className={styles.messagesItems}>{messageItems}</div>

        <textarea
          className={styles.addMessageForm}
          placeholder="Type text here..."
          onChange={changeNewMessageTextHandler}
          value={props.dialogsPage.newMessageText}
        ></textarea>
        <button
          className="button my-posts__form-button"
          onClick={onAddMessageClickHandler}
        >
          Add post
        </button>
      </div>
    </div>
  );
}
