import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul className="nav__links">
        <li>
          <Link to="/">
            <h1>REACTCDV</h1>
          </Link>
        </li>
        <li>
          <Link to="/Tab1">TAB1</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
