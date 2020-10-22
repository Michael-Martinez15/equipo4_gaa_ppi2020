import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap'
import "../style/Funpeso.css";


const Funpeso = (props) => {
  const { history } = props;
  return (
    <div className="Funpeso">
   
      <h1 className="Princ">
        <Button className="FlechaAtras btn-light" onClick={() => history.push("/Comofun")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
      Peso</h1>
      <div className="infoP">
      <p> En esta fase podrás  </p>
      <p>ingresar el peso de </p>
      <p> cada mes de tu</p>                   
      <p>embarazo, donde </p>
      <p>llevarás un control </p>
      <p>de toda tu evolución. </p>
      
     
      </div>

    </div>
   );
};


export default withRouter (Funpeso);