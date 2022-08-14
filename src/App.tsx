import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { RootStateType } from "./redux/state";

type PropsType = {
  state: RootStateType;
};

function App(props: PropsType) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />

        <main className="content">
          <Routes>
            <Route
              index
              element={<Profile state={props.state.profilePage} />}
            />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.dialogsPage} />}
            >
              <Route
                path=":userId"
                element={<Dialogs state={props.state.dialogsPage} />}
              />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
