import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { authActions, authThunks } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Header } from "./Header";

class HeaderAPIContainer extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.setAuthAndProfile();
  }

  render() {
    return (
      <Header
        userId={this.props.authData.id}
        login={this.props.authData.login}
        userpic={this.props.profile?.photos.small || null}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): AppStateType["auth"] =>
  state.auth;

const connector = connect(mapStateToProps, { ...authActions, ...authThunks });

export const HeaderContainer = connector(HeaderAPIContainer);
