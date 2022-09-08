import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { StoreType } from "./redux/redux-store";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Provider } from "react-redux";
import { UsersContainer } from "./components/Users/UsersContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";

type PropsType = {
  store: StoreType;
};

function App(props: PropsType) {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
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
              <Route exact path="/users">
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

export default App;
