import { ChangeEvent } from "react";
import {
  addMessageAC,
  DialogsPageType,
  DispatchType,
  updateNewMessageTextAC,
} from "../../redux/store";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { MessageItem } from "./MessageItem/MessageItem";

type PropsType = {
  dialogsPage: DialogsPageType;
  dispatch: DispatchType;
};

export function Dialogs(props: PropsType) {
  const dialogItems = props.dialogsPage.users.map((user) => (
    <DialogItem user={user} />
  ));
  const messageItems = props.dialogsPage.messages.map((message) => (
    <MessageItem message={message} />
  ));

  const changeNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageTextAC(e.currentTarget.value));
  };

  const onAddMessageClickHandler = () => {
    props.dispatch(addMessageAC());
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
