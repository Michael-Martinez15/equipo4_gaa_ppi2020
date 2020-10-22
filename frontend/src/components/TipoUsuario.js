import React from 'react';
import { Button } from 'react-bootstrap'

import { withRouter } from "react-router-dom";
import "../style/TipoUsuario.css";


const TipoUsuario = (props) => {
  const { history } = props;

  return (
    <div className="TipoUsuario">

      <h1 className="UsuarioT">¿Qué usuario</h1>
      <h1 className="UsuarioT">representas?</h1>
       
       <div className="Espacio">

        <Button className="MujerG btn btn-light" onClick={() => history.push('/ComoMujer')}>
           <img className="Mujer"
             src="./img/MujerGestante.png"
             alt="Mujer Gestante"/>
             Mujer Gestante  
        </Button>{' '}
      </div>
      
      <div className="Espacio1">
        <Button className="MujerG btn btn-light" onClick={() => history.push('/ComoObstetra')}>  
          <img className="Obstetra"
             src="./img/Obstetra.png"
             alt="Mujer Gestante"/>
             Obstetra 
        </Button>{' '}
      </div>

    </div>
 )
};

export default withRouter (TipoUsuario);