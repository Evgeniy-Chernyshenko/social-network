import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./Status.module.css";

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  statusText: null | string;
  setStatus: (status: string) => void;
};

export const Status = (props: PropsType) => {
  const [status, setStatus] = useState(props.statusText);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setStatus((prevState) =>
      props.statusText !== prevState ? props.statusText : prevState
    );
  }, [props.statusText]);

  const toggleEditMode = () => {
    isEditMode && props.setStatus(status || "");
    setIsEditMode(!isEditMode);
  };

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && toggleEditMode();
  };

  const className = [
    styles.container,
    ...(props.className ? [props.className] : []),
  ].join(" ");

  return (
    <div className={className}>
      {!isEditMode && (
        <span onDoubleClick={toggleEditMode}>
          {props.statusText || "-----"}
        </span>
      )}
      {isEditMode && (
        <input
          onBlur={toggleEditMode}
          onChange={handleChangeStatus}
          onKeyPress={handleKeyPress}
          autoFocus
          type="text"
          value={status || ""}
        />
      )}
    </div>
  );
};
