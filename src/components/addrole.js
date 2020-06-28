import React, { Component } from "react";

/**
 * @component
 * @description page accessible depuis le panneau adminstrateur servant à ajouter un role
 */
class Addrole extends Component {
  /**
   * @description Les informations pouvant être remplies sous la forme [nom] = valeur
   */
  static infos = {};

  /**
   * @function
   * @description Prend en charge les changements des différents inputs de la page
   * @param {Event} event passé automatiquement et permet d'accéder aux valeurs des inputs
   * @callback
   */
  static handleChange(event) {
    Addrole.infos[event.target.name] = event.target.value;
  }

  /**
   * @function
   * @description Fonction appelée lors de la confirmation et l'envoie du formulaire rempli (ici le nouveau message)
   * @param {MouseEvent} event qui permet d'obtenir des informations sur l'envoie du formulaire
   * @callback
   */
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
