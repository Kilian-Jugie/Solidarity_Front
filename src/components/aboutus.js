import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Aboutus extends Component {
  render() {
    return (
      <div className="surnous">
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="aboutus-grid">
            <Cell col={12}>
              <hr class="featurette-divider"></hr>
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
                <hr class="featurette-divider"></hr>
              </div>
            </Cell>
          </Grid>
        </div>
        <div class="container marketing row">
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
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
            <h2>Andréas</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a class="btn btn-secondary" href="/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
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
            <h2>Kilian</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
            <p>
              <a class="btn btn-secondary" href="/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
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
            <h2>Thibaud</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <a class="btn btn-secondary" href="/" role="button">
                View details »
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutus;