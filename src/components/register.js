import React, { Component } from "react";
import jsSHA from "jssha";

class Register extends Component {
  static state = {};

  static handleChange(event) {
    Register.state[event.target.name] = event.target.value;
  }

  static handleSubmit(event) {
    event.preventDefault();
    if (Register.state["password1"] !== Register.state["password2"]) {
      alert("Les deux mots de passe ne correpondent pas");
      return;
    }
    /*if(Register.state["role"] === "Administrateur") {
      alert("Le rôle administrateur n'est pas assignable automatiquement. Contactez les administrateurs");
      return;
    }*/

    fetch("http://localhost:3000/api/users/" + Register.state["email"])
      .then((res) => res.json())
      .then((result) => {
        if (result["type"] === undefined) {
          alert("Un utilisateur avec cette adresse email existe déjà");
          return;
        }
        var passHash = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
        passHash.update(Register.state["password1"]);

        fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: Register.state["firstname"],
            lastname: Register.state["lastname"],
            email: Register.state["email"],
            description: "",
            authkey: passHash.getHash("HEX"),
            rolename: Register.state["role"],
          }),
        }).then((res) => {
          window.location.assign("./success");
        });
      });
  }

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
              <form
                className="needs-validation"
                noValidate=""
                onSubmit={Register.handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Prénom"
                      name="firstname"
                      onChange={Register.handleChange}
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Un Prénom valide est requis.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Nom"
                      name="lastname"
                      onChange={Register.handleChange}
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Un nom valide est requis
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
                      name="email"
                      onChange={Register.handleChange}
                      required={true}
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
                    id="password1"
                    name="password1"
                    onChange={Register.handleChange}
                    placeholder=""
                    required={true}
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
                    id="password2"
                    name="password2"
                    onChange={Register.handleChange}
                    placeholder="Confirmez votre mot de passe"
                    required={true}
                  />
                  <div className="invalid-feedback">
                    Veuillez rentrer un mot de passe correct.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="society">Société (facultatif)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="society"
                    name="society"
                    onChange={Register.handleChange}
                    placeholder=""
                    required={false}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">
                    Numéro de téléphone (facultatif)
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+33</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      onChange={Register.handleChange}
                      placeholder=""
                      required={false}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="role">
                      Fonction en société (facultatif)
                    </label>
                    <select
                      className="custom-select d-block w-100"
                      id="role"
                      name="function"
                      onChange={Register.handleChange}
                      required={false}
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
                      name="role"
                      onChange={Register.handleChange}
                      required={true}
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
