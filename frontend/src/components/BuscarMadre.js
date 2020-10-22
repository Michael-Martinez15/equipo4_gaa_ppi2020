import React from 'react';
import "../style/BuscarMadre.css";
import {Button} from 'react-bootstrap'
import { withRouter } from "react-router-dom";


const BuscarMadre = (props) => {
  const { history } = props;
  return (
    <div className="BuscarMadre">
      <h1 className="TituloBuscar"> 
      <Button className="FlechaAtras btn-light" onClick={() => history.push('/ComoObstetra')}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
      Buscar Madre</h1>
      
      <div className="BuscarM">
        <h1 className="CorreoE"> Correo Electrónico o Número Celular: </h1>
      </div>
      
      <div className="BuscarM">
        <label for="inputBuscar" className="BusMa"> </label>
        <input type="madre" id="inputBuscar" className="maform-control" placeholder="Ej: Vilma o 3154800264" required="" autofocus="" />
     
        <Button className="iconoUsuario btn-light" onClick={() => history.push('/BuscarMR')}>
          <img className="icono" src="../img/Usuario.png" alt="" /> 
        </Button>{' '}
      </div>
    </div>
  )
};

export default withRouter (BuscarMadre);