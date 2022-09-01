import { connect } from "react-redux";
import { Dispatch } from "redux";
import { dialogsActions } from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

type MapStateToPropsReturnType = {
  dialogsPage: AppStateType["dialogsPage"];
};

type MapDispatchToPropsReturnType = {
  updateNewMessageTextCallback: (newMessageText: string) => void;
  addMessageCallback: () => void;
};

export type DialogsPropsType = MapStateToPropsReturnType &
  MapDispatchToPropsReturnType;

const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (
  dispatch: Dispatch
): MapDispatchToPropsReturnType => ({
  updateNewMessageTextCallback: (newMessageText) => {
    dispatch(dialogsActions.updateNewMessageTextAC(newMessageText));
  },
  addMessageCallback: () => {
    dispatch(dialogsActions.addMessageAC());
  },
});

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
