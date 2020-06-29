import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

/**
 * @component
 * @description Donne les informations nécessaires afin de contacter les administrateurs ou l'autorité chargé de la gestion du site
 */
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Solidarity Bond</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Vous voici sur la page de contact, vous pouvez nous joindre en nous appelant ou en vous rendant directement à l'adresse indiquée.
              Il est possible de venir au fablab sans rendez-vous mais si le fablab est déjà occupé, nous serons dans l'incapacité de vous acceuillir.<br />
              Nous sommes heureux de pouvoir vous aider dans la réalisation de vos prototypes, si vous souhaitez devenir un de nos client ou partenaire, n'hésitez pas à vous incrire sur notre site.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contactez nous !</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    05 56 95 49 41
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    Horaires d'ouverture Lundi au Vendredi
                    <p>De 9h00 à 17h00</p>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    BOLabCesi@cesi.fr
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    264 Boulevard Godard, Bordeaux
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
