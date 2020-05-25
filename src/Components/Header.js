import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

function Header(){
  return (
    <header
      style={{
        height: "45px",
        backgroundColor: "whitesmoke",
        boxShadow: "3px 4px 8px lightgray",
        padding: "10px 0px 0px 10px",
      }}
    >
    <ul>
      <li>
        <Link to="/" >      
          <h2 style={{ color: "navy", textShadow: "2px 4px 5px gray" }}>
            REACTCDV
          </h2>
        </Link>
      </li>
      <li>
        <Link to="/Tab1">
          TAB1
        </Link>
      </li>
    </ul>

    </header>
  );
};

export default Header;
