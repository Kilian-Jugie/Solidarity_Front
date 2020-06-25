import React, { Component } from "react";

class Delusers extends Component {
  render() {
    return (
      <div>
        <h1>Supprimer</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        Entrez l'email : <input type="text" name="nom" /> <br />
        <input type="submit" name="valider" value="Supprimer" />
      </div>
    );
  }
}

export default Delusers;
