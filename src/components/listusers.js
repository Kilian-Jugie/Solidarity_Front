import React, { Component } from "react";

/**
 * @component
 * @description page accessible depuis le panneau adminstrateur servant à afficher tous les utilisateurs
 */
class Listusers extends Component {
  /**
   * @type {string}
   * @description les utilisateurs à afficher
   */
  display = "";

  /**
   * @function
   * @description Permet d'obtenir la liste des utilisateurs a afficher
   */
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
