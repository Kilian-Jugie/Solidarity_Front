import React, { Component } from "react";
import { IconButton, Menu, MenuItem } from "react-mdl";
import { Link } from "react-router-dom";
import jsSHA from "jssha";

class Profile extends Component {
  infos = {}

  displayedName = "";
  displayedEmail = "";
  displayedRole = "";
  displayedDescription = "";

  user = {}

  handleChange(event) {
    this.infos[event.target.name] = event.target.value;
  }

  async handleSubmit(event) {
    switch(event.target.name) {
      case "password": {
        if(this.infos["password1"] === undefined || this.infos["password2"] === undefined) {
          alert("Les deux mots de passe doivent être remplis afin de les modifier");
          return;
        }
        if(this.infos["password1"] !== this.infos["password2"]) {
          alert("Les deux mots de passe ne sont pas identiques");
          return;
        }
        var passHash = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
        passHash.update(this.infos["password1"]);

        await(fetch("http://localhost:3000/api/users/"+this.user["ID"], {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.user["Premon"],
            lastname: this.user["Nom"],
            email: this.user["Email"],
            description: this.user["Description"],
            authkey: passHash.getHash("HEX"),
            roleid: this.user["ID_Role"]
          })
        }));
        alert("Le mot de passe a bien été modifié");
      }break;
      case "email": {
        await(fetch("http://localhost:3000/api/users/"+this.user["ID"], {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.user["Premon"],
            lastname: this.user["Nom"],
            email: this.infos["email"],
            description: this.user["Description"],
            authkey: this.user["authkey"],
            roleid: this.user["ID_Role"]
          })
        }));
        alert("L'adresse mail a bien été modifié, une reconnexion est nécessaire");
        document.cookie = "undefined";
        window.location.assign("..");
      }break;
      case "description": {
        await(fetch("http://localhost:3000/api/users/"+this.user["ID"], {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.user["Premon"],
            lastname: this.user["Nom"],
            email: this.user["Email"],
            description: this.infos["description"],
            authkey: this.user["authkey"],
            roleid: this.user["ID_Role"]
          })
        }));
        alert("La description a bien été modifié");
        window.location.reload();
      }break;
      case "deletion": {
        
      }break;
      default: break;
    }
  }

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
        this.user = res;
        this.displayedName = res["Nom"] + " " + res["Premon"];
        this.displayedEmail = c["user"];
        this.displayedDescription = res["Description"];
        fetch("http://localhost:3000/api/roles/" + res["ID_Role"])
          .then((res2) => res2.json())
          .then((res2) => {
            this.displayedRole = res2["Label"];
            this.forceUpdate();
          });
      });
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
                <h6>{this.displayedDescription}</h6>
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
              onChange={this.handleChange}
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
              id="password2"
              name="password2"
              onChange={this.handleChange}
              placeholder="Confirmez votre mot de passe"
            />
            <br />
            <button type="button" class="btn btn-primary" name="password" onClick={this.handleSubmit}>
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
                name="email"
                onChange={this.handleChange}
                defaultValue={this.user["Email"]}
                required={true}
              />
              <div className="invalid-feedback">Un Email valide est requis</div>
            </div>
            <br />
            <button type="button" class="btn btn-primary" name="email" onClick={this.handleSubmit}>
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
              name="description"
              onChange={this.handleChange}
              defaultValue={this.user["Description"]}
            ></textarea>
          </div>
          <br />
          <button type="button" class="btn btn-primary" name="description" onClick={this.handleSubmit}>
            Ajouter
          </button>
          <hr className="r"></hr>
          <h3>Supprimer votre profil</h3>
          <hr className="r"></hr>
          <button type="button" class="btn btn-primary" name="deletion" onClick={this.handleSubmit}>
            Supprimer
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
