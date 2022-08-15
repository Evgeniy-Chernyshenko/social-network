import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { AddPostType, RootStateType } from "./redux/state";

type PropsType = {
  state: RootStateType;
  addPost: AddPostType;
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
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
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
