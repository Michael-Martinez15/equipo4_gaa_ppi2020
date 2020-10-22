import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../style/Gracias.css";


const Gracias = (props) => {
  const { history } = props;

  return (
    <div className="Gracias">
   
      <h2 className="Tenks"> NINE MONTHS  </h2>
      <h2 className="Thanks"> OF LOVE </h2>
      <img className="LogoG" src="../img/Graxx.jpg" alt="Logo Gracias" />
      <Button className="Continuar btn btn-light" onClick={() => history.push('/InicioPrincipal')}> Continuar </Button>{' '}

    </div>
   )
};

export default withRouter (Gracias);