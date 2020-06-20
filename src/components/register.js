import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="https://image.flaticon.com/icons/svg/32/32039.svg"
              alt="NoteBookPaper"
              width="72"
              height="72"
            />
            <h2>Inscription</h2>
            <p class="lead">
              Veuillez rentrer ci-dessous les informations nécessaire à votre
              inscription
            </p>
          </div>
          <div class="row">
            <div class="col-md-12 order-md-1">
              <form class="needs-validation" novalidate="">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">Nom</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="Nom"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Un nom valide est requis.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Prénom</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Prénom"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Un prénom valide est requis
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Email</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="vous@exemple.com"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Un Email valide est requis
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="password">Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder=""
                  />
                  <div class="invalid-feedback">
                    Veuillez rentrer un mot de passe correct.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="password">Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Confirmez votre mot de passe"
                  />
                  <div class="invalid-feedback">
                    Veuillez rentrer un mot de passe correct.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="society">Société</label>
                  <input
                    type="text"
                    class="form-control"
                    id="society"
                    placeholder=""
                    required=""
                  />
                </div>

                <div class="mb-3">
                  <label for="phone">Numéro de téléphone</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">+33</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder=""
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="role">Rôle</label>
                    <select
                      class="custom-select d-block w-100"
                      id="role"
                      required=""
                    >
                      <option value="">Choisir...</option>
                      <option>Fonction Technique</option>
                      <option>Fonction Commerciale</option>
                      <option>Fonction Financière</option>
                      <option>Fonction Sécurité</option>
                      <option>Fonction Comptable</option>
                      <option>Fonction Administrative</option>
                      <option>Recherche et développement</option>
                      <option>Dirigeant</option>
                    </select>
                    <div class="invalid-feedback">
                      Sélectionnez un rôle valide.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="state">Type de rôle</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required=""
                    >
                      <option value="">Choisir...</option>
                      <option>Administrateur</option>
                      <option>Partenaire</option>
                      <option>Client</option>
                      <option>Fabricant</option>
                    </select>
                    <div class="invalid-feedback">
                      Veuillez fournir un rôle valide.
                    </div>
                  </div>
                </div>
                <hr class="mb-4"></hr>
                <button
                  id="but"
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
