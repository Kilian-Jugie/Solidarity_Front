import React, { Component } from "react";

/**
 * @component
 * @description page accessible depuis le panneau adminstrateur servant à supprimer un role
 */
class Delrole extends Component {

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
    Delrole.infos[event.target.name] = event.target.value;
  }

  /**
   * @function
   * @description Fonction appelée lors de la confirmation et l'envoie du formulaire rempli (ici le nouveau message)
   * @param {MouseEvent} event qui permet d'obtenir des informations sur l'envoie du formulaire
   * @callback
   */
  static handleSubmit(event) {
    fetch("http://localhost:3000/api/roles/"+Delrole.infos["name"], {method: "DELETE"}).then((res)=>{
      alert("Role supprimé");
    });
  }

  render() {
    return (
      <div>
        <h1>Pour supprimer un rôle</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        Entrez le nom du rôle : <input type="text" name="name" onChange={Delrole.handleChange}/> <br />
        <input type="submit" name="valider" value="Supprimer" onClick={Delrole.handleSubmit} />
      </div> 
    );
  }
}

export default Delrole;
