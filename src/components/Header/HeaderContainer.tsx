import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { authThunks } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Header } from "./Header";

class HeaderAPIContainer extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.setAuth();
  }

  render() {
    return <Header login={this.props.authData.login} />;
  }
}

const mapStateToProps = (state: AppStateType): AppStateType["auth"] =>
  state.auth;

const connector = connect(mapStateToProps, { ...authThunks });

export const HeaderContainer = connector(HeaderAPIContainer);
