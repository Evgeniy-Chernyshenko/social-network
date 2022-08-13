import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

type DialogItemPropsType = {
  userId: number;
  userName: string;
};

type MessageItemPropsType = {
  userPic: string;
  userName: string;
  text: string;
};

function DialogItem(props: DialogItemPropsType) {
  return (
    <li>
      <NavLink
        to={`/dialogs/${props.userId}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {props.userName}
      </NavLink>
    </li>
  );
}

function MessageItem(props: MessageItemPropsType) {
  return (
    <div>
      <img src={props.userPic} alt={props.userName} />
      <p>{props.text}</p>
    </div>
  );
}

export function Dialogs() {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.users}>
        <DialogItem userId={1} userName="Stepan" />
        <DialogItem userId={2} userName="Vasa" />
        <DialogItem userId={3} userName="Ira" />
      </ul>
      <div className={styles.messages}>
        <MessageItem
          userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU"
          userName="User name"
          text="Message text 1"
        />
        <MessageItem
          userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU"
          userName="User name"
          text="Message text 2"
        />
        <MessageItem
          userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU"
          userName="User name"
          text="Message text 3"
        />
      </div>
    </div>
  );
}
