import React, { Component } from "react";
import "../styles/Main.css";
import Saver from "./Saver";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateToSave: "January 1, 2021",
      newDate: "",
    };
  }

  UpdateDate(e) {
    e.preventDefault();
    this.setState({
      dateToSave: this.state.newDate,
    });
  }

  render() {
    return (
      <div className="Container">
        <h1 className="Title">Look how long until</h1>
        <form>
          <input
            onChange={(e) => this.setState({ newDate: e.target.value })}
            type="text"
            placeholder="new date"
            className="Input"
          />
          <button onClick={(e) => this.UpdateDate(e)} className="Button">
            Look
          </button>
        </form>
        <div className="helper">
          Your input should look like: "January 25, 2021"
        </div>
        <Saver dateToSave={this.state.dateToSave} />
      </div>
    );
  }
}

export default Main;
