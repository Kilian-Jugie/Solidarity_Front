import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

/**
 * @component
 * @description Donne des informations diverses sur les développeurs du site
 */
class Aboutus extends Component {
  render() {
    return (
      <div className="surnous">
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="aboutus-grid">
            <Cell col={12}>
              <hr className="featurette-divider"></hr>
              <div className="small">
                <h1 className="coover">Qui sommes nous ?</h1>
                <p>
                  Notre équipe n'est composé que de bénévoles. Nous sommes
                  quatre élèves du CESI Bordeaux en formation ingénieur
                  informatique. Nos capacités professionelles et techniques nous
                  permettrons de répondre à cette situation.
                </p>
              </div>
              <div className="container marketing">
                <hr className="featurette-divider"></hr>
              </div>
            </Cell>
          </Grid>
        </div>

        <div className="container marketing row">
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
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Ducourneau Andréas </h2>
            <p>
              Dévellopeur Back-end <br />
              Réalisation : Structure du site , Front et back-end<br />
            A commencer son cursus à l'école d'ingénieur du CESI bordeaux,il est le réalisateur de la structure du site et de ces fonctionnaliter ansi que de son designe.
            </p>
          </div>
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
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Jugie Kilian</h2>
            <p>
              Devellopeur C++<br />
              Réalisation : API , back-end , BDD<br />
              A commencer son cursus à l'école d'ingénieur du CESI bordeaux,il est le réalisateur de l'API ansi qu'une partie de la base de données et des fonctionnalités du sites.
            </p>
          </div>
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
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Rapin Thibaud</h2>
            <p>
              Devellopeur Back-end<br />
              Réalisation : Front et back-end , BDD<br />
              A commencer son cursus à l'école d'ingénieur du CESI bordeaux,il est le réalisateur d'une partie de la bdd ansi que des fonctionnaliter du sites et de sont designe.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Aboutus;
