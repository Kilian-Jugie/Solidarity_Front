import React, { Component } from "react";
import { Link } from "react-router-dom";

class Connexion extends Component {
  render() {
    return (
      <div className="connexion">
        <form className="form-signin">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="http://www.walkingelephant.info/wp-content/uploads/2018/01/icon-loupe-150x150.png"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Solidarity Connexion</h1>
            <p>
              Pour vous connecter a votre compte, veuillez renseigner votre
              identifiant et votre mot de passe
            </p>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Se souvenir de moi
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Connexion
          </button>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            <Link to="./register"></Link>
            S'inscrire
          </button>
          <p className="mt-5 mb-3 text-muted text-center">© 2017-2020</p>
        </form>
      </div>
    );
  }
}

export default Connexion;
