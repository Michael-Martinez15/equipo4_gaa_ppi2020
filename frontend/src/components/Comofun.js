import React from 'react';
import {Button} from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/Comofun.css";


const Comofun = (props) => {
  const { history } = props;

  return (
    <div className="Comofun">
      <h1 className="Usuario">
      <Button className="FlechaAtras btn-light" onClick={() => history.push("/InicioPrincipal")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
      ¿Cómo funciona?</h1>
       
       <div className="Espacio">
        <Button className="Calenda btn btn-light" onClick={() => history.push('/Funcale')}>
           <img className="Calendario1"
             src="./img/Calendario.png"
             alt="Calendario"/>
             Calendario  
        </Button>{' '}
      </div>
      
      <div className="Espacio7">
        <Button className="Calenda btn btn-light" onClick={() => history.push('/Funpeso')}>  
          <img className="Peso1"
             src="./img/Peso.png"
             alt="Pesito"/>
             Peso
        </Button>{' '}
      </div>

    </div>
 )
};


export default withRouter (Comofun);