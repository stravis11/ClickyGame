import React from "react";
import "./Header.css";
import Hero from "../Hero";

const Header = props => (
  <div className="header">
    {/* <Hero backgroundImage="https://i.imgur.com/2ST6V90.png"> */}
    <h1>{props.title}</h1>
    <h2>{props.instructions}</h2>
    {/* </Hero> */}
  </div>
);
export default Header;
