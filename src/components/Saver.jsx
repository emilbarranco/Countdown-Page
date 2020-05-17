import React, { Component } from "react";

export class Saver extends Component {
  //const thisDate = Date.parse(dateToSave) - Date.parse(new Date());

  //const days = Math.floor(thisDate / (1000 * 60 * 60 * 24));
  //const hours = Math.floor((thisDate / (1000 * 60 * 60)) % 24);
  //const minutes = Math.floor((thisDate / 1000 / 60) % 60);

  render() {
    return (
      <div className="Saver">
        <form>
          <input type="text" className="Input" />
          <button className="Button">Save</button>
        </form>
        <div className="helper">
          Your input should look like: "January 25, 2021"
        </div>
        <div className="Date">
          <h2>January 1, 2020</h2>
          <hr />
          <div className="Details">
            <div className="time">days</div>
            <div className="time">hours</div>
            <div className="time">minutes</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saver;
