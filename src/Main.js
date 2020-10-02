import React from "react";
import logo from "./logo.svg";
import Adress from "./Profil/Adress";

import "./App.css";
import Profilphoto from "./Profil/Profilphoto";
import FullNaim from "./Profil/FullNaim";

function Main() {
  return (
    <div className="Main">
      <img src={logo} className="App-logo" alt="logo" />

      <Profilphoto />
      <FullNaim />
      <Adress />
    </div>
  );
}

export default Main;
