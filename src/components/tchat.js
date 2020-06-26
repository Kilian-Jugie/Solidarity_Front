import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Tchat extends Component {
  static localUserName = ' ';
  static lastMessage = ' ';
  static messageHistory = [  ];
  
  async getMessagesHistory() {
  Tchat.messageHistory = [ ];
    var user = await (await fetch("http://localhost:3000/api/users/" + JSON.parse(document.cookie)["user"])).json();
    var messages = await (await fetch("http://localhost:3000/api/messages/" + user["ID"]+"?all=true")).json();

    for(var i=0; i<messages.length; i++) {
      var from = "";
      var to = "";
      if(messages[i].ID_Account === user["ID"]) {
        from = user["Email"];
        to = (await (await fetch("http://localhost:3000/api/users/"+messages[i].ID_Account_receive)).json())["Email"];
      }
      else {
        to = user["Email"];
        from = (await (await fetch("http://localhost:3000/api/users/"+messages[i].ID_Account)).json())["Email"];
      }
      Tchat.messageHistory.push(<div>Message envoyé par: {from} pour: {to}<br/>{messages[i].Content}<br/><br/></div>);
    }
  }

  async setupPage() {
    await this.getMessagesHistory();
    this.getLastMessage();
    this.forceUpdate();
  }

  getLastMessage() {
    Tchat.lastMessage = Tchat.messageHistory[Tchat.messageHistory.length-1];
  }

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.getMessagesHistory = this.getMessagesHistory.bind(this);
    this.getLastMessage = this.getLastMessage.bind(this);
    this.setupPage();
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

        var idReceiver = result["ID"]
        fetch("http://localhost:3000/api/users/" + JSON.parse(document.cookie)["user"])
          .then((res) => res.json())
          .then((result) => {
            fetch("http://localhost:3000/api/messages/" + result["ID"], { ///messages/{id l'expediteur}

              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({

                "toid": idReceiver,   // JSON avec champs : toid(int) [id du destinataire], text(string) [texte du message]
                "text": Tchat.state["user_message"],
              })
            });
            alert('Le message a été envoyé');

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
                    <strong className="d-block text-gray-dark">{Tchat.localUserName}</strong>
                    {Tchat.lastMessage}
                  </p>
                </div>

              </div>
            )}
            {this.state.activeTab === 1 && (
              <div>
                <h1 className="center" >Mettre les messages </h1>
                <ul>
                  {Tchat.messageHistory}
                </ul>
              </div>
            )}
            {this.state.activeTab === 2 && (
              <div className="row formulaire">
                <div className="col-md-12 order-md-1 ">
                  <form
                    className="needs-validation"
                    noValidate=""
                    onSubmit={Tchat.handleSubmit}
                  >
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
                      <textarea class="zoneTexte"
                        cols="25" 
                        rows="8" 
                        id="msg" 
                        name="user_message" 
                        onChange={Tchat.handleChange}> </textarea>
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
      </div>
    );
  }
}

export default Tchat;
