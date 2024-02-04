import React from "react";
import { Link } from "react-router-dom";

const sideBarStyle = {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
};

const linkStyle = {
  marginBottom: "10px",
};

function SideBar() {
  return (
    <div style={sideBarStyle}>
      <div style={linkStyle}>
        <Link to="/">Home</Link>
      </div>
      <div style={linkStyle}>
        <Link to="/profile">Profile</Link>
      </div>
      <div style={linkStyle}>
        <Link to="/signUp">SignUp</Link>
      </div>
      <div style={linkStyle}>
        <Link to="/books">Books</Link>
      </div>
    </div>
  );
}

export default SideBar;
