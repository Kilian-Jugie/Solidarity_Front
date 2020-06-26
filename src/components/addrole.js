import React, { Component } from "react";

class Addrole extends Component {
  static infos = {};

  static handleChange(event) {
    Addrole.infos[event.target.name] = event.target.value;
  }

  static handleSubmit(event) {
    fetch("http://localhost:3000/api/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
        "name": Addrole.infos["name"]
        })}).then((res) => {
          alert("Role correctement ajouté");
        });
  }

  render() {
    return (
      <div>
        <h1>Pour ajouter un rôle</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        <hr className="featurette-divider"></hr>
        Entrez le nom du rôle : <input type="text" name="name" onChange={Addrole.handleChange} required={true} /> <br />
        <input type="submit" name="valider" value="Ajouter" onClick={Addrole.handleSubmit} />
        <hr className="featurette-divider"></hr>
      </div>
    );
  }
}

export default Addrole;
