import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }

  render() {
    return (
      <div>
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
                    <strong className="d-block text-gray-dark">Nom user</strong>
                    Donec id elit non mi porta gravida at eget metus. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus.
                  </p>
                </div>
              </div>
            )}
            {this.state.activeTab === 1 && <h1>Mettre les messages </h1>}
            {this.state.activeTab === 2 && (
              <div className="row formulaire">
                <div className="col-md-12 order-md-1 ">
                  <form className="needs-validation" noValidate="">
                    <div className="mb-3 center">
                      <label htmlFor="useremail">Email</label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="useremail"
                          placeholder="vous@exemple.com"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Un Email valide est requis
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 center">
                      <label htmlFor="destemail">Email du destinataire</label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="destemail"
                          placeholder="email.destinaire@exemple.com"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Un Email valide est requis
                        </div>
                      </div>
                    </div>
                    <div className="center">
                      <div className="center">
                        <label for="msg" style={{ textAlign: "center" }}>
                          Message:
                        </label>
                      </div>
                      <textarea id="msg" name="user_message"></textarea>
                    </div>
                    <hr className="mb-4"></hr>
                    <button
                      id="but"
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      S'inscrire
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
