import React from 'react';
import "../style/ComoMujer.css";
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";


const ComoMujer = (props) => {
  const { history } = props;
  return (
    <div className="ComoMujer">
      
      <h1 className="TituloMujer"> 
      <Button className="FlechaAtras btn-light" onClick={() => history.push('/TipoUsuario')}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
      Ingresaste como Mujer Gestante </h1>

      <img className="LogoPrincipal" src="../img/LogoPrincipal.png" alt="LogoPrincipal"/>
      
      <div className="Espacio4">
        <Button className="Registro btn-light" onClick={() => history.push('/RegistroMujer')}>
           REGISTRARSE
        </Button>{' '}
      </div>

      <div className="Espacio5">
        <Button className="InicioSesión btn-light" onClick={() => history.push('/InicioMujer')}>
           INICIAR SESIÓN
        </Button>{' '}
      </div>

    </div>
  )
}

export default withRouter (ComoMujer);