import React from 'react';
import "../style/ComoObstetra.css";
import {Button} from 'react-bootstrap'
import { withRouter } from "react-router-dom";


const ComoObstetra = (props) => {
  const { history } = props;
  return (
    <div className="ComoObstetra">
      
      <h1 className="TituloObstetra"> 
      <Button className="FlechaAtras btn-light" onClick={() => history.push('/TipoUsuario')} >
      
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "}
        Ingresaste como Obstetra</h1>

      <img className="LogoPrincipal" src="../img/LogoPrincipal.png" alt="LogoPrincipal"/>
      
      <div className="Espacio2">
        <Button className="Registro btn-light" onClick={() => history.push('/RegistroObstetra')}>
           REGISTRARSE
        </Button>{' '}
      </div>

      <div className="Espacio3">
        <Button className="InicioSesión btn-light" onClick={() => history.push('/InicioObstetra')}>
           INICIAR SESIÓN
        </Button>{' '}
      </div>

    </div>
  )
}

export default withRouter (ComoObstetra);