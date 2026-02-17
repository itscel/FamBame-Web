import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navigation from "./pages/Navigation";
import About from "./pages/About";
import Inventory from "./pages/Inventory"

function App() {
  const [username, setUsername] = useState<string>("");
  const [activePage, setActivePage] = useState<"home" | "profile" | "about" | "inventory" >("home");

  if (!username) {
    return <Login onLogin={(name) => setUsername(name)} />;
  }

  return username ? (
    <>
      <Navigation setActivePage={setActivePage} />
      {activePage === "home" && <Home username={username} />}
      {activePage === "profile" && <Profile username={username} />}
      {activePage === "about" && <About username={username} />}
      {activePage === "inventory" && <Inventory username={username} />}
    </>
  ) : (
    
    <Login onLogin={(name) => setUsername(name)} />
  );
}

export default App;
