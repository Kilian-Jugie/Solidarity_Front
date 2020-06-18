import React, { Component } from "react";
import { DataTable } from "react-mdl";

class Tchat extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center">Messagerie</h1>
        <p className="center">
          Bienvenue sur la page de messagerie, sur cette page vous pouvez
          consulter vos messages envoyer et reçut. Vous pouvez également envoyer
          et écrire un message.
        </p>
        <h3 className="center">Dernier message reçus </h3>
        <h3 className="center">Historique des messages</h3>
        <h3 className="center">Message</h3>
      </div>
    );
  }
}

export default Tchat;
