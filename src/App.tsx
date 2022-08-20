import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreType } from "./redux/redux-store";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { StoreProvider } from "./StoreContext";

type PropsType = {
  store: StoreType;
};

function App(props: PropsType) {
  return (
    <BrowserRouter>
      <StoreProvider store={props.store}>
        <div className="wrapper">
          <Header />
          <Navigation />

          <main className="content">
            <Routes>
              <Route index element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />}>
                <Route path=":userId" element={<DialogsContainer />} />
              </Route>
            </Routes>
          </main>
        </div>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
