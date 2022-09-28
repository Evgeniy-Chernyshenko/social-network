import { Component, ComponentType } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { profileActions, profileThunks } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

class ProfileAPIContainer extends Component<
  ConnectedProps<typeof connector> & RouteComponentProps<{ userId: string }>
> {
  componentDidMount() {
    const routeUserId = +this.props.match.params.userId;
    const authId = this.props.authId;
    const userId = routeUserId || authId;

    if (!userId) {
      this.props.history.push("/login");
      return;
    }

    this.props.setUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        posts={this.props.posts}
        addPost={this.props.addPost}
        profile={this.props.profile}
        status={this.props.status}
        setStatus={this.props.setStatus}
      />
    );
  }
}

const mapStateToProps = (
  state: AppStateType
): AppStateType["profilePage"] & {
  authId: AppStateType["auth"]["authData"]["id"];
} => ({
  ...state.profilePage,
  authId: state.auth.authData.id,
});

const connector = connect(mapStateToProps, {
  ...profileActions,
  ...profileThunks,
});

export const ProfileContainer = compose<ComponentType>(
  connector,
  withRouter
)(ProfileAPIContainer);
