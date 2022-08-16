import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { AddPostType, StateType, UpdateNewPostTextType } from "./redux/store";

type PropsType = {
  state: StateType;
  addPost: AddPostType;
  updateNewPostText: UpdateNewPostTextType;
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
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs"
              element={<Dialogs dialogsPage={props.state.dialogsPage} />}
            >
              <Route
                path=":userId"
                element={<Dialogs dialogsPage={props.state.dialogsPage} />}
              />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
