import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { authThunks } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Header } from "./Header";

class HeaderAPIContainer extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.setAuth();
  }

  componentDidUpdate() {
    if (!this.props.authData.login && this.props.authData.id) {
      this.props.setAuth();
    }
  }

  render() {
    console.log("render HeaderContainer");

    return (
      <Header login={this.props.authData.login} logout={this.props.logout} />
    );
  }
}

const mapStateToProps = (state: AppStateType): AppStateType["auth"] =>
  state.auth;

const connector = connect(mapStateToProps, { ...authThunks });

export const HeaderContainer = connector(HeaderAPIContainer);
