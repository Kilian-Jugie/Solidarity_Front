import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div className="body">
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <i className="fa fa-bar-chart"></i>
              <div style={{ position: "relative" }}></div>
            </div>
            <div classNameName="col-lg-4"></div>
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
                  <h1 className="card-title pricing-card-title">nbuser</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>user 1</li>
                    <li>user 2</li>
                    <li>user 3</li>
                    <li>user 4</li>
                  </ul>
                  <a href="/userlist">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Liste des Utilisateurs
                    </button>
                  </a>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Partenaire</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">nbuser</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>user 1</li>
                    <li>user 2</li>
                    <li>user 3</li>
                    <li>user 4</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    nb utilisateur
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>user 1</li>
                    <li>user 2</li>
                    <li>user 3</li>
                    <li>user 4</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Contact us
                  </button>
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
