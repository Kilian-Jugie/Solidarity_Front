import React, { Component } from "react";

class Delrole extends Component {
  render() {
    return (
      <div>
        <h1>Pour supprimer un rôle</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        Entrez le nom du rôle : <input type="text" name="nom" /> <br />
        <input type="submit" name="valider" value="Supprimer" />
      </div>
    );
  }
}

export default Delrole;
