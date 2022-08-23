import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { actions } from "../../redux/users-reducer";
import { Users } from "./Users";

type MapStateToPropsReturnType = {
  users: AppStateType["usersPage"]["users"];
};
type MapDispatchToPropsReturnType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: AppStateType["usersPage"]["users"]) => void;
};
export type UsersPropsType = MapStateToPropsReturnType &
  MapDispatchToPropsReturnType;

const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (
  dispatch: Dispatch
): MapDispatchToPropsReturnType => ({
  follow: (userId) => dispatch(actions.follow(userId)),
  unfollow: (userId) => dispatch(actions.unfollow(userId)),
  setUsers: (users) => dispatch(actions.setUsers(users)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
