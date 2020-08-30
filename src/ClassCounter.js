import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  // handle button click event
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return <div>
      <b>Counter - Class Component</b><br /><br />
      <label>Counter: {this.state.counter}</label><br /><br />
      <button onClick={this.handleClick}>Add +1</button>
    </div>
  }
}

export default ClassCounter;