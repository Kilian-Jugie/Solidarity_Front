import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div className="body">
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <i class="fa fa-bar-chart"></i>
              <div style={{ position: "relative" }}></div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Page d'Administration</h1>
            <p class="lead">
              Cette page sert globalement a avoir un controle sur l'entièreté du
              site. On peut y effectuer n'importe quel changement et interagir
              avec la base de données
            </p>
          </div>
          <div class="container">
            <div class="card-deck mb-3 text-center">
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">
                    Lister les Utilisateurs
                  </h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $0 <small class="text-muted">/ mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-primary"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Liste des Articles</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $15 <small class="text-muted">/ mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $29 <small class="text-muted">/ mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-primary"
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
