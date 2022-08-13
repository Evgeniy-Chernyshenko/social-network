import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />

        <main className="content">
          <Routes>
            <Route index element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />}>
              <Route path=":userId" element={<Dialogs />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
