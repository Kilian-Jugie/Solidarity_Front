import React, { Component } from "react";
function controle() {
  var form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nom = document.getElementById("firstName").value;
    var prenom = document.getElementById("lastName").value;
    var Email = document.getElementById("username").value;
    var mdp = document.getElementById("password").value;
    var mdp2 = document.getElementById("comfirmpassword").value;
    //var Description = document.getElementById("society").value;
    //var entrepriserole = document.getElementById("role").value;
    var role = document.getElementById("state").value;
    var Url =
      "http://localhost:3000/api/users?lasname&firstname&email&description&authkey&rolename";
    if (mdp === mdp2) {
      fetch(Url, {
        method: "POST",
        body: JSON.stringify({
          lastname: nom,
          firstname: prenom,
          email: Email,
          description: "je suis une description",
          authkey: mdp,
          rolename: role,
        }),
        headers: {
          "Content-type": "application/json ; charset=UTF-8 ",
          "host": "localhost:3000",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "Access-Control-Allow-Origin": "null",
        },
      })
        .then(function (response) {
          return response.json;
        })
        .then(function (data) {
          console.log(data);
        });
    } else {
      alert("mot de passe de comfirmation mauvais");
    }
  });
}
/* 
  if (mdp === mdp2) {
    alert("vous avez saisie : " + nom);
    alert("vous avez saisie : " + prenom);
    alert("vous avez saisie : " + email);
    alert("vous avez saisie : " + mdp);
    alert("vous avez saisie : " + description);
    alert("vous avez saisie : " + entrepriserole);
    alert("vous avez saisie : " + role);
    alert(Url);
  } else {
    alert("mot de passe de comfirmation mauvais");
*/
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
              <form
                className="needs-validation"
                id="form"
                method="post"
                noValidate=""
              >
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
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="comfirmpassword"
                    placeholder="Confirmez votre mot de passe"
                  />
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
                      <option value="2">Administrateur</option>
                      <option value="3">Partenaire</option>
                      <option value="1">Client</option>
                      <option value="4">Fabricant</option>
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
                  onClick={controle}
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
