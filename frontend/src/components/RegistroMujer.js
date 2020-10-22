import React from "react";
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/RegistroMujer.css";


const RegistroMujer = (props) => {
  const { history } = props;
  return (
    <div className="RegistroMujer">  
        <h1 className="TituloMujer">
        <Button className="FlechaAtras btn-light" onClick={() => history.push("/ComoMujer")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
         Registro </h1>

       <form action="/InicioPrincipal">
        <div className="Casillas form-group">
           <label for="inputNombre"> Nombres: </label>
           <input type="text" id="inputNombre" className="form-control" placeholder="Isabella" />
        </div>

        <div className="Casillas form-group">
           <label for="inputApellido"> Apellidos: </label>
           <input type="text" id="inputApellido" className="form-control" placeholder="Álvarez Muñoz" />
        </div>

        <div className="Casillas form-group">
           <label for="inputEmail"> Correo Electrónico: </label>
           <input type="email" id="inputEmail" className="form-control" placeholder="isabella@gmail.com" />
        </div>

        <div className="Casillas form-group">
           <label for="inputPassword"> Contraseña:  </label>
           <input type="password" id="inputPassword" className="form-control" placeholder="canelita08" />
        </div>

        <div className="Casillas form-group">
           <label for="inputCelular"> Número de Celular:  </label>
           <input type="int" id="inputCelular" className="form-control" placeholder="3003138045" />
        </div>

        <div className="Casillas form-group">
           <label for="inputInicio"> Inicio de Embarazo: </label>
           <input type="date" id="inputInicio" className="form-control" />
        </div>

        <button className="Boton btn-lg btn-light" type="submit" /*onClick={() => history.push('/InicioPrincipal')}*/ >
          Registrar
        </button>
      </form>
    
    </div>
  );
};


export default withRouter (RegistroMujer);