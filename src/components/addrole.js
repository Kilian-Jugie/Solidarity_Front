import React, { Component } from "react";

class Addrole extends Component {
  render() {
    return (
      <div>
        <h1>Pour ajouter un rôle</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        <hr className="featurette-divider"></hr>
        Entrez le nom du rôle : <input type="text" name="nom" /> <br />
        <input type="submit" name="valider" value="Ajouter" />
        <hr className="featurette-divider"></hr>
      </div>
    );
  }
}

export default Addrole;
