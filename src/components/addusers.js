import React, { Component } from "react";

class Addusers extends Component {
  render() {
    return (
      <div>
        <h1>Pour ajouter un utilisateur</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        <hr className="featurette-divider"></hr>
        Entrez le nom : <input type="text" name="nom" /> <br />
        Entrez le prénom : <input type="text" name="nom" /> <br />
        Entrez l'email : <input type="text" name="nom" /> <br />
        Entrez le nom :
        <select
          className="custom-select d-block w-100"
          id="state"
          name="role"
          /*onChange={Register.handleChange}
          required={true}
          */
        >
          <option value="">Choisir...</option>
          <option>Administrateur</option>
          <option>Partenaire</option>
          <option>Client</option>
          <option>Fabricant</option>
        </select>
        <br />
        <input type="submit" name="valider" value="Ajouter" />
        <hr className="featurette-divider"></hr>
      </div>
    );
  }
}

export default Addusers;
