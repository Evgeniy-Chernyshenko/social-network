import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { profileActions, profileThunks } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

class ProfileAPIContainer extends Component<
  ConnectedProps<typeof connector> & RouteComponentProps<{ userId: string }>
> {
  componentDidMount() {
    this.props.setUserProfile(+this.props.match.params.userId || 2);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }

    return (
      <Profile
        newPostText={this.props.newPostText}
        posts={this.props.posts}
        updateNewPostText={this.props.updateNewPostText}
        addPost={this.props.addPost}
        profile={this.props.profile}
      />
    );
  }
}

const mapStateToProps = (
  state: AppStateType
): AppStateType["profilePage"] & { isAuth: boolean } => ({
  ...state.profilePage,
  isAuth: !!state.auth.authData.id,
});

const connector = connect(mapStateToProps, {
  ...profileActions,
  ...profileThunks,
});

export const ProfileContainer = withRouter(connector(ProfileAPIContainer));
