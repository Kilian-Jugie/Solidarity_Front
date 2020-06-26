import React, { Component } from "react";
import { IconButton, Menu, MenuItem } from "react-mdl";
import { Link } from "react-router-dom";

class Profile extends Component {
  static getDisplayedName() {}

  displayedName = "";
  displayedEmail = "";
  displayedRole = "";

  constructor(props) {
    super(props);
    if (document.cookie === "undefined") {
      alert("Seul les utilisateurs connectés ont accès à cette page");
      window.location.assign("..");
      return;
    }
    var c = JSON.parse(document.cookie);
    fetch("http://localhost:3000/api/users/" + c["user"])
      .then((res) => res.json())
      .then((res) => {
        this.displayedName = res["Nom"] + " " + res["Premon"];
        this.displayedEmail = c["user"];
        fetch("http://localhost:3000/api/roles/" + res["ID_Role"])
          .then((res2) => res2.json())
          .then((res2) => {
            this.displayedRole = res2["Label"];
            this.forceUpdate();
          });
      });
  }

  render() {
    return (
      <div className="body">
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <div style={{ position: "relative" }}>
                <h2>{this.displayedName}</h2>
                <h3>{this.displayedEmail}</h3>
                <h4>{this.displayedRole}</h4>
                <IconButton name="more_vert" id="demo-menu-lower-left" />
                <Menu target="demo-menu-lower-left">
                  <Link to="/connexion">
                    <MenuItem>Modifier le mot de passe</MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem>Modifier l'adresse mail</MenuItem>
                  </Link>
                  <Link to="/aboutus">
                    <MenuItem>Modifier la description</MenuItem>
                  </Link>
                  <Link to="/register">
                    <MenuItem>Supprimer votre profil</MenuItem>
                  </Link>
                </Menu>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <hr className="r"></hr>
          <h3>Modifier le mot de passe</h3>
          <div className="mb-3">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password1"
              //onChange={Register.handleChange}
              placeholder=""
              //required={true}
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
              //onChange={Register.handleChange}
              placeholder="Confirmez votre mot de passe"
              //required={true}
            />
            <br />
            <button type="button" class="btn btn-primary">
              Modifier
            </button>
          </div>
          <hr className="r"></hr>
          <h3>Modifier l'adresse mail</h3>
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
                //onChange={Register.handleChange}
                //required={true}
              />
              <div className="invalid-feedback">Un Email valide est requis</div>
            </div>
            <br />
            <button type="button" class="btn btn-primary">
              Modifier
            </button>
          </div>
          <hr className="r"></hr>
          <h3>Modifier la description</h3>
          <label htmlFor="username">Rentrez une nouvelle description :</label>
          <div class="input-group">
            <textarea
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <br />
          <button type="button" class="btn btn-primary">
            Ajouter
          </button>
          <hr className="r"></hr>
          <h3>Supprimer votre profil</h3>
          <hr className="r"></hr>
        </div>
      </div>
    );
  }
}

export default Profile;
