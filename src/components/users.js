import React, { Component } from "react";

/**
 * Page listant tous les utilisateurs afin de chercher quelqu'un à contacter
 * @component
 */
class Users extends Component {
  userList = [  ];
  searchedRole = "";

  async getUserList() {
    this.userList = [];
    var users = await (await fetch("http://localhost:3000/api/users?role="+this.searchedRole)).json();
    for(var i=0; i<users.length; i++) {
      this.userList.push(<div>Mme ou Mr {users[i]["Premon"]} {users[i]["Nom"]}<br/>Adresse mail: {users[i]["Email"]}<br/><br/></div>);
    }
  }

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
                  <h1>Example headline.</h1>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container marketing">
            <hr class="featurette-divider"></hr>
            <h2>Profil page</h2>
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
