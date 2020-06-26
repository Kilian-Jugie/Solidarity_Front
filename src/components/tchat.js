import React, { Component } from "react";
import { Tabs, Tab, Content } from "react-mdl";
var Name = ' ';
var message = ' ';
var Donner;
function derniermessage() {
  var Email = JSON.parse(document.cookie)["user"];

  fetch("http://localhost:3000/api/users/" + Email)
    .then((res) => res.json())
    .then((result) => {
      Name = result["Nom"];
      //alert(Name)
      //alert(result["ID"])

      fetch("http://localhost:3000/api/messages/" + result["ID"])
        .then((res) => res.json())
        .then((result) => {
          //alert("je suis le dernier message : " + result[result.length - 1]["Content"])
          //alert("je suis lid du dernier message : " + result[result.length - 1]["ID"])
          message = result[result.length - 1]["Content"]
        });
    })

}
function historiqueMessage() {
  fetch("http://localhost:3000/api/users/" + JSON.parse(document.cookie)["user"])
    .then((res) => res.json())
    .then((result) => {
      alert(result["ID"])//3
      fetch("http://localhost:3000/api/messages/" + result["ID"])
        .then((res) => res.json())
        .then((result) => {
          var x = 0;
          alert(result[0])
          alert(result[1])
          alert(result[2])
          alert(result[3])
          alert("result x " + result[x])
          while (result[x] !== undefined) {
            x = x + 1
            alert("valeur de x" + x)
            //compteur de messages envoyer x correspond au nombres de messages envoyer 
          }
          alert(Donner)
        });
    });
}
class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  static state = {};

  static handleChange(event) {
    Tchat.state[event.target.name] = event.target.value;
  }

  static handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/api/users/" + Tchat.state["email"])
      .then((res) => res.json())
      .then((result) => {
        var id_destinataire = result["ID"]
        //alert(id_destinataire);//renvoie 2
        //alert(Tchat.state["user_message"]);//renvoie premier message
        fetch("http://localhost:3000/api/users/" + JSON.parse(document.cookie)["user"])
          .then((res) => res.json())
          .then((result) => {
            alert(result["ID"]) // renvoie 3 
            fetch("http://localhost:3000/api/messages/" + result["ID"], { ///messages/{id l'expediteur}
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "toid": id_destinataire,   // JSON avec champs : toid(int) [id du destinataire], text(string) [texte du message]
                "text": Tchat.state["user_message"],

              })

            });
            alert('message envoyer');
          });
      });
  }
  render() {
    return (

      < div >

        <h1 className="center">Messagerie</h1>
        <div className="demo-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Dernier message</Tab>
            <Tab>Historique Message</Tab>
            <Tab>Envoyer un message</Tab>
          </Tabs>
          <section>
            <div className="content">
              Content for the tab: {this.state.activeTab}
            </div>
            {this.state.activeTab === 0 && (
              <div className="my-3 p-3 bg-white rounded shadow-sm">
                <div className="media text-muted pt-3">
                  <svg
                    className="bd-placeholder-img mr-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: 32x32"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">{Name}</strong>
                    {message}
                  </p>
                </div>
                <button className="center" onClick={derniermessage}>
                  refresh
                    </button>
              </div>
            )}
            {this.state.activeTab === 1 && (
              <div>
                <h1 className="center" >Mettre les messages </h1>
                <button onClick={historiqueMessage}>
                  refresh
                </button>
                <ul>
                  <li>{Donner}</li>
                </ul>
              </div>
            )}
            {this.state.activeTab === 2 && (
              <div className="row formulaire">
                <div className="col-md-12 order-md-1 ">
                  <form className="needs-validation" noValidate="" onSubmit={Tchat.handleSubmit}>
                    <div className="mb-3 center">
                      <label htmlFor="destemail">Email du destinataire</label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="destemail"
                          placeholder="email.destinaire@exemple.com"
                          required=""
                          name="email"
                          onChange={Tchat.handleChange}
                        />
                        <div className="invalid-feedback">
                          Un Email valide est requis
                        </div>
                      </div>
                    </div>
                    <div className="center">
                      <div className="center">
                        <label htmlFor="msg" style={{ textAlign: "center" }}>
                          Message:
                        </label>
                      </div>
                      <textarea class="zoneTexte" cols="25" rows="8" id="msg" name="user_message" onChange={Tchat.handleChange}></textarea>
                    </div>
                    <hr className="mb-4"></hr>
                    <button
                      id="but"
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Envoyer
                    </button>

                  </form>
                </div>
              </div>
            )}
          </section>
        </div>
      </div >
    );
  }
}

export default Tchat;
