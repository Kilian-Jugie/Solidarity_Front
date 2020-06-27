import React, { Component } from "react";

/**
 * @component
 * @description page accessible depuis le panneau adminstrateur servant à afficher tous les roles
 */
class Listrole extends Component {
  /**
   * @type {string}
   * @description les roles à afficher
   */

   display = "";

    /**
   * @function
   * @description Permet d'obtenir la liste des roles a afficher
   */
  getDisplay() {
    fetch("http://localhost:3000/api/roles").then((res) => res.json()).then((res) => {
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
        <h1>Listoles Page</h1>
        {this.display}
      </div>
    );
  }
}

export default Listrole;
