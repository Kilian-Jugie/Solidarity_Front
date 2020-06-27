import React, { Component } from "react";

/**
 * Page utilisateur
 * @component
 * @exemple
 * cc
 */
class Users extends Component {
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
              required=""
            >
              <option value="">Choisir...</option>
              <option>Administrateur</option>
              <option>Partenaire</option>
              <option>Client</option>
              <option>Fabricant</option>
            </select>
            <hr class="featurette-divider"></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
