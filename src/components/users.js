import React, { Component } from "react";

/**
 * @description Page listant tous les utilisateurs afin de chercher quelqu'un à contacter
 * @component
 */
class Users extends Component {
  /**
   * @description Liste les utilisateurs sous forme d'un tableau JSX
   */
  userList = [];
  /**
   * @type {string}
   * @description Le rôle recherché sous form de string
   */
  searchedRole = "";

  /**
   * @function
   * @description Permet de remplir le champ userList qui est affiché en tant que JSX
   * @async
   */
  async getUserList() {
    this.userList = [];
    var users = await (
      await fetch("http://localhost:3000/api/users?role=" + this.searchedRole)
    ).json();
    for (var i = 0; i < users.length; i++) {
      this.userList.push(
        <div>
          Mme ou Mr {users[i]["Premon"]} {users[i]["Nom"]}
          <br />
          Adresse mail: {users[i]["Email"]}
          <br />
          <br />
        </div>
      );
    }
  }

  /**
   * @function
   * @description Prend en charge le changement de rôle dans le menu déroulant et le sauvegarde
   * @param {Event} event passé automatiquement et permet d'accéder aux valeurs des inputs
   * @async
   * @callback
   */
  async handleChange(event) {
    this.searchedRole = event.target.value;
    await this.getUserList();
    this.forceUpdate();
  }

  constructor(props) {
    super(props);
    this.getUserList = this.getUserList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="body">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <svg
                class="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
              <div class="container">
                <div class="carousel-caption text-center">
                  <img
                    className="im1"
                    src="https://www.projet-coop.fr/wp-content/uploads/2019/08/logo-pour-le-site-1-2.png"
                    alt="fablab1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container marketing">
            <hr class="featurette-divider"></hr>
            <div className="text-center">
              <h2>Page de profil</h2>
              <p>
                Sur cette page nous pouvons voir les informations publique des
                utilisateurs qui sont enregistré a notre afin de pouvoir élargir
                notre réseau que ce soit pour nos clients comme nos partenaires.
                elit.
              </p>
            </div>
            <br />
            Choisir un rôle :
            <select
              class="custom-select d-block w-100"
              id="state"
              name="role"
              onChange={this.handleChange}
              required={true}
            >
              <option value="">Choisir...</option>
              <option>Administrateur</option>
              <option>Partenaire</option>
              <option>Client</option>
              <option>Fabricant</option>
            </select>
            <hr class="featurette-divider"></hr>
            {this.userList}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
