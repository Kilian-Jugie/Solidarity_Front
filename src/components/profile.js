import React, { Component } from "react";
import Infoprofil from "./infoprofil";
import Stock from "./stock";
class Profile extends Component {
  render() {
    return (
      <div>
        <h1 className="center">Profile Page</h1>
        <Infoprofil
          Name={Stock.Name}
          Email={Stock.Email}
          Status={Stock.Status}
          Password={Stock.Password}
        ></Infoprofil>
      </div>
    );
  }
}

export default Profile;
