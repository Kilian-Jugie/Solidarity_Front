import React, { Component } from "react";
import P_A from "../images/P_A.jpg";
import Fab from "../images/Fab.jpg";
import V from "../images/Visère.jpg";

/**
 * @component
 * @description Page d'accueil principale sur laquelle l'utilisateur tombe en entrant l'adresse du site
 */

class Landing extends Component {
  render() {
    return (
      <div className="maiin">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className=""></li>
            <li
              data-target="#myCarousel"
              data-slide-to="1"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="im2"
                src="https://bordeaux.cesi.fr/wp-content/uploads/sites/24/2019/12/IMG_3971.jpg"
                alt="fablab1"
              />
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption text-center ttext">
                  <h1>Qu’est-ce qu’un Fab Lab ?</h1>
                  <p className="t">
                    De la contraction de l’anglais « Fabrication Laboratory » (
                    laboratoire de fabrication ), un Fab Lab est un espace
                    collaboratif de conception et de fabrication de prototypes
                    et d’objets à partir de technologies numériques mais aussi
                    d’outils divers et variés. En plus de permettre à tous les
                    usagers de s’approprier le matériel, le Fab Lab est aussi un
                    lieu de vie communautaire. Vous avez la possibilité de venir
                    échanger avec d’autres makers, proposer des projets,
                    participer avec nous aux nombreux événements.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className=" text-top center ttext">
                <h1>Outils mis a disposition</h1>
              </div>
              <img className="im2" src={P_A} alt="fablab1" />
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
            </div>
            <div className="carousel-item">
              <img
                className="im1"
                src="https://www.projet-coop.fr/wp-content/uploads/2019/08/logo-pour-le-site-1-2.png"
                alt="fablab1"
              />
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption text-center">
                  <h1>Projet COOP</h1>
                  <p>
                    COOP est une plateforme pédagogique et technique pour
                    développer sur le territoire local la culture de
                    l'innovation et le prototypage pour l'entrepreneuriat. Le
                    projet COOP est un de nos partenaire nous permettant
                    d'ouvrir le fablab de bordeaux à toute personne ayant besoin
                    de tels outils.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container marketing">
          <hr className="featurette-divider"></hr>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Visière <span className="text-muted">CESI</span>
              </h2>
              <p className="lead">
                Voici un exemple de visère confectionné par le CESI. Si vous
                aussi vous souhaitez créer vos propres visères ou même d'autres
                équipements de protection, le cesi met à disposition des outils
                et des matériaux dans cet objectif. Pour cela contactez nous en
                vous rendant sur la page contact ou via la messagerie en vous
                inscrivant.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="im2"
                src={V}
                alt="fablab1"
                width="350"
                height="350"
              />
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                CESI <span className="text-muted">FABLAB Bordeaux</span>
              </h2>
              <p className="lead">
                Le Fablab de bordeaux ouvre ces portes à tous ceux qui veulent
                se lancer dans le prototypage d'équipements de protections en
                fournissant plusieurs outils et matériaux gratuitement. Si vous
                êtes interressé, n'hésitez pas à nous contacter.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="im2"
                src={Fab}
                alt="fablab1"
                width="350"
                height="350"
              />
            </div>
          </div>
          <hr className="featurette-divider"></hr>
          <div className="item-grid grid-4 center">
            <h2 className="center">Outils mis à disposition</h2>
            <img
              className="img"
              src="https://www.projet-coop.fr/wp-content/uploads/2019/08/Sans-titre-6.png"
              alt=""
            />
            <img
              className="img"
              src="https://www.projet-coop.fr/wp-content/uploads/2019/08/Sans-titre-5.png"
              alt=""
            />
            <img
              className="img"
              src="https://www.projet-coop.fr/wp-content/uploads/2019/08/Sans-titre-4.png"
              alt=""
            />
            <img
              className="img"
              src="https://www.projet-coop.fr/wp-content/uploads/2019/08/Sans-titre-3.png"
              alt=""
            />
            <hr className="featurette-divider"></hr>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
