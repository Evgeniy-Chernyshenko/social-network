import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { formValidators } from "../../utils/form-validators";
import { Button } from "../common/Button/Button";
import { FormControl } from "../common/FormControl/FormControl";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { DialogsPropsType } from "./DialogsContainer";
import { MessageItem } from "./MessageItem/MessageItem";

type FormDataType = {
  newMessageText: string;
};

const maxLength100Validator = formValidators.maxLength(100);

const DialogForm = (props: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Type text here..."
        name="newMessageText"
        component={FormControl}
        componentType="textarea"
        validate={[formValidators.required, maxLength100Validator]}
      ></Field>
      <Button>Send message</Button>
    </form>
  );
};

const ReduxDialogForm = reduxForm<FormDataType>({
  form: "dialog",
})(DialogForm);

export function Dialogs(props: DialogsPropsType) {
  const dialogItems = props.dialogsPage.users.map((user) => (
    <DialogItem key={user.id} user={user} />
  ));
  const messageItems = props.dialogsPage.messages.map((message) => (
    <MessageItem key={message.id} message={message} />
  ));

  const onAddMessageClickHandler = (formData: FormDataType) => {
    props.addMessageCallback(formData.newMessageText);
  };

  return (
    <div className={styles.dialogs}>
      <ul className={styles.users}>{dialogItems}</ul>
      <div className={styles.messages}>
        <div className={styles.messagesItems}>{messageItems}</div>
        <ReduxDialogForm onSubmit={onAddMessageClickHandler} />
      </div>
    </div>
  );
}
