import React, { Component } from "react";
import { IconButton, Menu, MenuItem } from "react-mdl";
import { Link } from "react-router-dom";

class Profile extends Component {
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
                <h2>Nom Prénoms</h2>
                <IconButton name="more_vert" id="demo-menu-lower-left" />
                <Menu target="demo-menu-lower-left">
                  <Link to="/connexion">
                    <MenuItem>Modifier le mot de passe</MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem>Modifier l'adresse mail</MenuItem>
                  </Link>
                  <Link to="/aboutus">
                    <MenuItem>Modifier le numéro de téléphone</MenuItem>
                  </Link>
                  <Link to="/register">
                    <MenuItem>Supprimer votre profil</MenuItem>
                  </Link>
                </Menu>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <hr className="featurette-divider"></hr>
        </div>
      </div>
    );
  }
}

export default Profile;
