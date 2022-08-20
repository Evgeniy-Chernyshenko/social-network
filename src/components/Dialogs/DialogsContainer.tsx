import { actions } from "../../redux/dialogs-reducer";
import { StoreContext } from "../../StoreContext";
import { Dialogs } from "./Dialogs";

export function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const updateNewMessageTextCallback = (newMessageText: string) => {
          store.dispatch(actions.updateNewMessageTextAC(newMessageText));
        };

        const addMessageCallback = () => {
          store.dispatch(actions.addMessageAC());
        };

        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            updateNewMessageTextCallback={updateNewMessageTextCallback}
            addMessageCallback={addMessageCallback}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
