import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actions } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

type MapStateToPropsReturnType = {
  posts: AppStateType["profilePage"]["posts"];
  newPostText: AppStateType["profilePage"]["newPostText"];
};

type MapDispatchToPropsReturnType = {
  updateNewPostTexCallback: (newPostText: string) => void;
  addPostCallback: () => void;
};

export type ProfilePropsType = MapStateToPropsReturnType &
  MapDispatchToPropsReturnType;

const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (
  dispatch: Dispatch
): MapDispatchToPropsReturnType => ({
  updateNewPostTexCallback: (newPostText: string) =>
    dispatch(actions.updateNewPostTextAC(newPostText)),
  addPostCallback: () => dispatch(actions.addPostAC()),
});

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
