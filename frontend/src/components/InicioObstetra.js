import React from "react";
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/InicioObstetra.css";


const InicioObstetra = (props) => {
  const { history } = props;
  return (
    <div className="InicioObstetra">

        <h1 className="TituloInicioO"> 
        <Button className="FlechaAtras btn-light" onClick={() => history.push("/ComoObstetra")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
        Inicio de Sesión </h1>
        <img className="LogoPrincipal" src="../img/LogoPrincipal.png" alt="Logo" /> 

      <form action="/BuscarMadre">
        <div className="Casillas form-group">
           <label for="exampleInputEmail"> Correo Electrónico: </label>
           <input type="email" className="form-control" id="exampleInputEmail" placeholder="zapataA.12@gmail.com" />
        </div>

        <div className="Casillas form-group">
            <label for="inputPasswor"> Contraseña: </label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Alber.12zapata" />
        </div>

        <button className="Boton btn-lg btn-light" type="submit" /*onClick={() => history.push("/BuscarMadre")}*/ >
          Iniciar Sesión
        </button>
          <p className="mt-5 mb-3 text-muted">© 2020-PPI</p>
      </form>
    
    </div>
  );
};