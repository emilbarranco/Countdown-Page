import React, { Component } from "react";

export class Saver extends Component {
  // State declarations and super call
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  // Lifecycle Hooks to Update UI & Calling method with prop as argument
  componentWillMount() {
    this.CalculateDate(this.props.dateToSave);
  }

  componentDidMount() {
    setInterval(() => this.CalculateDate(this.props.dateToSave), 1000);
  }

  // Time calculation method taking user input (prop) as argument
  CalculateDate(dateToSave) {
    // Parsing the input alongside the current Date() for calculation
    const thisDate = Date.parse(dateToSave) - Date.parse(new Date());
    // Calculations Formulas
    const days = Math.floor(thisDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((thisDate / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((thisDate / 1000 / 60) % 60);
    const seconds = Math.floor((thisDate / 1000) % 60);

    // Updating states after calculations
    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  // Adding zeros to numbers below 10 for visual improvement
  Zeros(num) {
    return num < 10 ? "0" + num : num;
  }

  render() {
    return (
      <div className="Saver">
        <div className="Date">
          <h2>{this.props.dateToSave}</h2>
          <hr />
          <div className="Details">
            <div className="time">{this.Zeros(this.state.days)} days</div>
            <div className="time">{this.Zeros(this.state.hours)} hours</div>
            <div className="time">{this.Zeros(this.state.minutes)} minutes</div>
            <div className="time">{this.Zeros(this.state.seconds)} seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saver;
