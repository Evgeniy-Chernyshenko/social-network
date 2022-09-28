import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppStateType, StoreType } from "./redux/redux-store";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { connect, ConnectedProps, Provider } from "react-redux";
import { UsersContainer } from "./components/Users/UsersContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { Component } from "react";
import { appThunks } from "./redux/app-reducer";
import { Preloader } from "./components/common/Preloader/Preloader";

type PropsType = {
  store: StoreType;
};

class App extends Component<PropsType & ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <div className="wrapper">
            <HeaderContainer />
            <Navigation />

            <main className="content">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/profile" />
                </Route>
                <Route exact path="/profile/:userId?">
                  <ProfileContainer />
                </Route>
                <Route exact path="/users/:page?">
                  <UsersContainer />
                </Route>
                <Route exact path="/dialogs/:userId?">
                  <DialogsContainer />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </Switch>
            </main>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isInitialized: state.app.isInitialized,
});

const connector = connect(mapStateToProps, { ...appThunks });

export default connector(App);
