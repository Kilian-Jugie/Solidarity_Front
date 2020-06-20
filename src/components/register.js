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
                      value=""
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
                      value=""
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
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select
                      class="custom-select d-block w-100"
                      id="country"
                      required=""
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required=""
                    >
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr class="mb-4"></hr>
                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Continue to checkout
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
