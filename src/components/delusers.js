import React, { Component } from "react";

class Delusers extends Component {

  static infos = {};

  static handleChange(event) {
    Delusers.infos[event.target.name] = event.target.value;
  }

  static handleSubmit(event) {
    fetch("http://localhost:3000/api/users/"+Delusers.infos["name"], {method: "DELETE"}).then((res)=>{
      alert("User supprimé");
    });
  }

  render() {
    return (
      <div>
        <h1>Supprimer</h1>
        <h2>Veuillez renseigner les informations nécessaires :</h2>
        Entrez l'email : <input type="text" name="name" onChange={Delusers.handleChange} /> <br />
        <input type="submit" name="valider" value="Supprimer" onClick={Delusers.handleSubmit} />
      </div>
    );
  }
}

export default Delusers;
