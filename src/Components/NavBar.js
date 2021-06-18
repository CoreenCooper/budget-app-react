import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink id="index" to="/transactions">Budget App</NavLink>
      <NavLink id="new-transaction-link" to="/transactions/new">New Transaction</NavLink>
    </nav>
  );
};

export default NavBar;
