import React, { Component } from "react";
import "../styles/Main.css";
import Saver from "./Saver";

export class Main extends Component {
  render() {
    return (
      <div className="Container">
        <h1 className="Title">Look how long until</h1>
        <Saver/>
      </div>
    );
  }
}

export default Main;
