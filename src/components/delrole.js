import React, { Component } from "react";

class Delrole extends Component {

  static infos = {};

  static handleChange(event) {
    Delrole.infos[event.target.name] = event.target.value;
  }

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
