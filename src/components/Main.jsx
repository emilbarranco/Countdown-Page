import React, { Component } from "react";
import "../styles/Main.css";
import Saver from "./Saver";

export class Main extends Component {
  // State declarations and super call
  constructor(props) {
    super(props);
    this.state = {
      dateToSave: "January 1, 2021",
      newDate: "",
    };
  }

  // Preventing the page refreshing & updating the Date Header (it's state)
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
            onChange={
              // Handling onChange to update the newDate with the user's input
              (e) => this.setState({ newDate: e.target.value })
            }
            type="text"
            placeholder="new date"
            className="Input"
          />
          <button
            onClick={
              // Submitting the input to display results
              (e) => this.UpdateDate(e)
            }
            className="Button"
          >
            Look
          </button>
        </form>
        <div className="helper">
          Your input should look like: "January 25, 2021"
        </div>
        <Saver
          dateToSave={
            // Passing the user input as a prop to manage on Saver component
            this.state.dateToSave
          }
        />
      </div>
    );
  }
}

export default Main;
