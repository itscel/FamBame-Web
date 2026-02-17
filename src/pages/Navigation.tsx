import "./Navigation.css";

type NavigationProps = {
  setActivePage: (page: "home" | "profile" | "about" | "inventory") => void;
};

const Navigation = ({ setActivePage }: NavigationProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">FamBam Web</div>
      <div className="navbar-right">
          <button onClick={() => setActivePage("home")}>Home</button>
          <button onClick={() => setActivePage("profile")}>Profile</button>
          <button onClick={() => setActivePage("about")}>About</button>
          <button onClick={() => setActivePage("inventory")}>Inventory</button>
      </div>
    </nav>
  );
};

export default Navigation;
