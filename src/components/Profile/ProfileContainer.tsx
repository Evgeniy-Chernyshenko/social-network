import axios from "axios";
import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { profileActions, ProfileType } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

class ProfileAPIContainer extends Component<
  ConnectedProps<typeof connector> & RouteComponentProps<{ userId: string }>
> {
  componentDidMount() {
    axios
      .get<ProfileType>(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.match.params.userId || 2
        }`
      )
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
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

const mapStateToProps = ({
  profilePage,
}: AppStateType): AppStateType["profilePage"] => profilePage;

const connector = connect(mapStateToProps, profileActions);

export const ProfileContainer = withRouter(connector(ProfileAPIContainer));
