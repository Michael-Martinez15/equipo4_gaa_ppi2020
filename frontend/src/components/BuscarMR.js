import React from "react";
import "../style/BuscarMR.css";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const BuscarMR = (props) => {
  const { history } = props;
  return (
    <div className="BuscarMR">
      <h1 className="TituloBuscar">
        <Button className="FlechaAtras btn-light" onClick={() => history.push("/BuscarMadre")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "}
        Buscar Madre
      </h1>

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

      <h1 className="TituloResultados"> Resultados </h1>
      <Button
        className="Resultados btn-light"
        onClick={() => history.push("/Perfil")}
      >
        <p className="vilma">vilma1504@gmail.com</p>
      </Button>{" "}
      <Button className="Resultados btn-light">
        <p className="vilma">ospinavilma@outlook.com</p>
      </Button>{" "}
      <Button className="Resultados btn-light">
        <p className="vilma"></p>
      </Button>{" "}
      <Button className="Resultados btn-light">
        <p className="vilma"></p>
      </Button>{" "}
    </div>
  );
};

export default withRouter(BuscarMR);
