import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />

      <main className="content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
