import { Navigation } from "./components/Navigation/Navigation";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppStateType, StoreType } from "./redux/redux-store";
import { connect, ConnectedProps, Provider } from "react-redux";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { Component, lazy } from "react";
import { appThunks } from "./redux/app-reducer";
import { Preloader } from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer").then(
    ({ ProfileContainer }) => ({ default: ProfileContainer })
  )
);
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer").then(
    ({ DialogsContainer }) => ({ default: DialogsContainer })
  )
);
const UsersContainer = lazy(() =>
  import("./components/Users/UsersContainer").then(({ UsersContainer }) => ({
    default: UsersContainer,
  }))
);

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
      <HashRouter>
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
                  {withSuspense(ProfileContainer)}
                </Route>
                <Route exact path="/users/:page?">
                  {withSuspense(UsersContainer)}
                </Route>
                <Route exact path="/dialogs/:userId?">
                  {withSuspense(DialogsContainer)}
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </Switch>
            </main>
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isInitialized: state.app.isInitialized,
});

const connector = connect(mapStateToProps, { ...appThunks });

export default connector(App);
