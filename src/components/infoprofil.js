import React from "react";

const Infoprofile = (props) => {
  console.log(props);

  return (
    <div className="info">
      <p>Name : {props.Name} </p>
      <p>Email : {props.Email}</p>
      <p>Password :{props.Password}</p>
      <p>Status :{props.Status}</p>
    </div>
  );
};

export default Infoprofile;
