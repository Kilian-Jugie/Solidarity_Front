import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    if (document.cookie === "undefined") {
      alert("Seul les utilisateurs connectés ont accès à cette page");
      window.location.assign("..");
      return;
    }
    try {
      var user = JSON.parse(document.cookie)["user"];
      fetch("http://localhost:3000/api/users/" + user)
        .then((res) => res.json())
        .then((result) => {
          fetch("http://localhost:3000/api/roles/" + result["ID_Role"])
            .then((res) => res.json())
            .then((fres) => {
              if (fres["Label"] !== "Administrateur") {
                alert("Seul les Administrateurs ont accès à cette page");
                window.location.assign("..");
                return;
              }
            });
        });
    } catch (e) {
      //Le cookie a un format incorrect
      alert("Veillez vous reconnecter");
      return;
    }
    return (
      <div className="body">
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <i className="fa fa-bar-chart"></i>
              <div style={{ position: "relative" }}></div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Page d'Administration</h1>
            <p className="lead">
              Cette page sert globalement a avoir un controle sur l'entièreté du
              site. On peut y effectuer n'importe quel changement et interagir
              avec la base de données
            </p>
          </div>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Lister les Utilisateurs
                  </h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">
                    Effectue un listing de toutes les personnes connectées sur
                    le site
                  </h5>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link to="/listusers">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Listez
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Ajouter un utilisateur
                  </h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">
                    Cela vous renvoie sur une page qui permettra d'ajouter un
                    utilisateur quelconque
                  </h5>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link to="/addusers">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Ajoutez
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Liste les rôles</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">
                    Affiche tout les rôles disponible sur le site web
                  </h5>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link to="/listrole">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Afiichez
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Ajouter un rôle</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">
                    Permet d'ajouter un rôle sur le site autre que ceux déjà
                    existant
                  </h5>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link to="/addrole">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Ajoutez
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Supprimer un utilisateur
                  </h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">
                    Permet de supprimer n'importe quel utilisateur du site en
                    renseignant certains paramètres
                  </h5>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link to="/delusers">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Supprimez
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Supprimer un rôle</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">
                    Permet de supprimer n'importe quel rôle en renseignant le
                    rôle a vouloir supprimer
                  </h5>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link to="/delrole">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Supprimez
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
