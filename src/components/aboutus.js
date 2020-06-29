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
                  trois élèves du CESI Bordeaux en formation d'ingénieur spécialité
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
              Développeur Frontend <br />
              Réalisation : Structure du site, Frontend<br />
              Etudie actuellement au CESI bordeaux, il est le réalisateur de la structure du site ansi que de son design.
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
              Développeur Backend<br />
              Réalisation : API, backend et BDD<br />
              Etudie actuellement au CESI bordeaux, il est le concepteur de l'API ansi que d'une partie de la base de données et des fonctionnalités du sites.
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
              Développeur Backend<br />
              Réalisation : Frontend, backend et BDD<br />
              Etudie actuellement au CESI bordeaux, il a réalisé une partie de la bdd ansi que des fonctionnalités du site et son design.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Aboutus;
