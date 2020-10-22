import React from "react";
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/InicioPrincipal.css";


const InicioPrincipal = (props) => {
  const { history } = props;
  return (
    <div className="InicioPrincipal">
       <h1 className="TituloPrincipal"> 

       <Button className="FlechaAtras btn-light" onClick={() => history.push("/TipoUsuario")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
          <img className="Logo" src="../img/LogoPrincipal.png" alt="" />
          INICIO 
       </h1>

       <div className="Espacio">
        <Button className="ComoFunciona btn btn-light" onClick={() => history.push('/Comofun')}>  
             <h3>¿Cómo</h3> 
             <h3>Funciona?</h3>
        </Button>{' '}
      </div>

      <div className="Espacio2">
        <Button className="Calendario btn btn-light" onClick={() => history.push('/Agenda')}>  
             <h3>Calendario</h3>
        </Button>{' '}

        <Button className="Peso btn btn-light" onClick={() => history.push('/Peso')}>  
             <h3>Peso</h3>
        </Button>{' '}
      </div>

      <div className="Espacio6">
        <Button className="Sugerencias1 btn btn-light" onClick={() => history.push('/Sugerencias')}>  
             <h3>Sugerencias</h3>
        </Button>{' '}
      </div>

    </div>
  );
};


export default withRouter (InicioPrincipal);