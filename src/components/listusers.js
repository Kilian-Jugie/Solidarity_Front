import React, { Component } from "react";

class Listusers extends Component {
  display = "";

  getDisplay() {
    fetch("http://localhost:3000/api/users").then((res) => res.json()).then((res) => {
      this.display = JSON.stringify(res);
      this.forceUpdate();
    })
  }

  constructor(props) {
    super(props);
    this.getDisplay();
  }

  render() {
    return (
      <div>
        <h1>Listusers Page</h1>
        {this.display}
      </div>
    );
  }
}

export default Listusers;
