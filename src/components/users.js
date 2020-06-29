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
          <div class="container marketing">
            <hr class="featurette-divider"></hr>
            <h2>Annuaire</h2>

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
