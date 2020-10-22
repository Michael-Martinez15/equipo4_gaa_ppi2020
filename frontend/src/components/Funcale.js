import React from "react";
import {Button} from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/Funcale.css";


const Funcale = (props) => {
  const { history } = props;
  return (
    <div className="Funcale">
   
      <h1 className="Princ">
      <Button className="FlechaAtras btn-light" onClick={() => history.push("/Comofun")}>
         <img className="img" src="../img/FlechaA.png" alt="" />
      </Button>{" "} 
       Calendario 
       </h1>

      <div className="info">
      <p> En el calendario </p>
      <p>podrás llevar un </p>
      <p> orden de tus citas médicas.</p>
                         
      <p>Debes ingresar la </p>
      <p>fecha de los días </p>
      <p> en que tienes una cita </p>
      <p> para poder darte un </p>
      <p>recordatorio. </p>
     
      </div>

    </div>
   );
};

export default withRouter (Funcale);
