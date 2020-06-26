import React, { Component } from "react";
import jsSHA from "jssha";

class Addusers extends Component {
  static infos = {};

  static handleChange(event) {
    Addusers.infos[event.target.name] = event.target.value;
  }

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
