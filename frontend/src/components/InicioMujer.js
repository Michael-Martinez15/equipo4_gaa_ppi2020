import React from "react";
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/InicioMujer.css";


const InicioMujer = (props) => {
  const { history } = props;
  return (
    <div className="InicioMujer">
        <h1 className="TituloInicioM"> 
         <Button className="FlechaAtras btn-light" onClick={() => history.push("/ComoMujer")}>
           <img className="img" src="../img/FlechaA.png" alt="" />
         </Button>{" "} 
          Inicio de Sesión 
        </h1>
        <img className="LogoPrincipal" src="../img/LogoPrincipal.png" alt="Logo" /> 

      <form action="/InicioPrincipal">
        <div className="Casillas form-group">
           <label for="exampleInputEmail"> Correo Electrónico: </label>
           <input type="email" className="form-control" id="exampleInputEmail" placeholder="tatiana@gmail.com" />
        </div>

        <div className="Casillas form-group">
           <label for="inputPassword"> Contraseña: </label>
           <input type="password" id="inputPassword" className="form-control" placeholder="tati8547.AM" />
        </div>

        <button className="Boton btn-lg btn-light" type="submit" /*onClick={() => history.push("/InicioPrincipal")}*/ >
          Iniciar Sesión
        </button>
          <p className="mt-5 mb-3 text-muted">© 2020-PPI</p>
      </form>
      
   </div>
  );
};


export default withRouter (InicioMujer);