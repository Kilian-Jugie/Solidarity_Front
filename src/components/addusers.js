import React, { Component } from "react";
import jsSHA from "jssha";

/**
 * @component
 * @description page accessible depuis le panneau adminstrateur servant à ajouter un utilisateur
 */
class Addusers extends Component {
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
    Addusers.infos[event.target.name] = event.target.value;
  }

  /**
   * @function
   * @description Fonction appelée lors de la confirmation et l'envoie du formulaire rempli (ici le nouveau message)
   * @param {MouseEvent} event qui permet d'obtenir des informations sur l'envoie du formulaire
   * @callback
   */
  static handleSubmit(event) {
    var passHash = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
    passHash.update(Addusers.infos["password"]);

    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
        "firstname": Addusers.infos["firstname"],
        "lastname": Addusers.infos["lastname"],
        "email": Addusers.infos["email"],
        "description": "",
        "authkey": passHash.getHash("HEX"),
        "rolename": Addusers.infos["role"]
        })}).then((res) => {
          alert("Utilisateur correctement ajouté");
        });
  }

  render() {
    return (
      <div>
        <h1>Pour ajouter un utilisateur</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        <hr className="featurette-divider"></hr>
        Entrez le nom : <input
          type="text"
          name="lastname" 
          onChange={Addusers.handleChange} 
          required={true} 
          /> <br />
        Entrez le prénom : <input
          type="text" 
          name="firstname" 
          onChange={Addusers.handleChange}
          required={true} 
          /> <br />
        Entrez l'email : <input
          type="text" 
          name="email" 
          onChange={Addusers.handleChange}
          required={true} 
         /> <br />
        Entrez le mot de passe : <input
          type="password" 
          name="password" 
          onChange={Addusers.handleChange}
          required={true} 
         /> <br/>
        Entrez le role :
        <select
          className="custom-select d-block w-100"
          id="state"
          name="role"
          onChange={Addusers.handleChange}
          required={true}
        >
          <option value="">Choisir...</option>
          <option>Administrateur</option>
          <option>Partenaire</option>
          <option>Client</option>
          <option>Fabricant</option>
        </select>
        <br />
        <input type="submit" name="valider" value="Ajouter" onClick={Addusers.handleSubmit}/>
        <hr className="featurette-divider"></hr>
      </div>
    );
  }
}

export default Addusers;
