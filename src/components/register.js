import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="text-center">
            <img
              className="d-block mx-auto mb-4"
              src="https://image.flaticon.com/icons/svg/32/32039.svg"
              alt="NoteBookPaper"
              width="72"
              height="72"
            />
            <h2>Inscription</h2>
            <p className="lead">
              Veuillez rentrer ci-dessous les informations nécessaire à votre
              inscription
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 order-md-1">
              <form className="needs-validation" noValidate="">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Nom"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Un nom valide est requis.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Prénom"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Un prénom valide est requis
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="username">Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      placeholder="vous@exemple.com"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Un Email valide est requis
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                  />
                  <div className="invalid-feedback">
                    Veuillez rentrer un mot de passe correct.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Confirmez votre mot de passe"
                  />
                  <div className="invalid-feedback">
                    Veuillez rentrer un mot de passe correct.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="society">Société</label>
                  <input
                    type="text"
                    className="form-control"
                    id="society"
                    placeholder=""
                    required=""
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+33</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="role">Rôle</label>
                    <select
                      className="custom-select d-block w-100"
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
                    <div className="invalid-feedback">
                      Sélectionnez un rôle valide.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="state">Type de rôle</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required=""
                    >
                      <option value="">Choisir...</option>
                      <option>Administrateur</option>
                      <option>Partenaire</option>
                      <option>Client</option>
                      <option>Fabricant</option>
                    </select>
                    <div className="invalid-feedback">
                      Veuillez fournir un rôle valide.
                    </div>
                  </div>
                </div>
                <hr className="mb-4"></hr>
                <button
                  id="but"
                  className="btn btn-primary btn-lg btn-block"
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
