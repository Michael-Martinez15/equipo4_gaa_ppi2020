import React from "react";
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/RegistroObstetra.css";


const RegistroObstetra = (props) => {
  const { history } = props;
  return (
    <div className="RegistroObstetra">  
          <h1 className="Titulo"> 
            <Button className="FlechaAtras btn-light" onClick={() => history.push("/ComoObstetra")}>
              <img className="img" src="../img/FlechaA.png" alt="" />
            </Button>{" "} 
             Registro 
          </h1>
     
      <form action="/BuscarMadre">
        <div className="Casillas form-group">
           <label for="inputNombre"> Nombres: </label>
           <input type="text" id="inputNombre" className="form-control" placeholder="Albeiro" />
        </div>

        <div className="Casillas form-group">
           <label for="inputApellido"> Apellidos: </label>
           <input type="text" id="inputApellido" className="form-control" placeholder="Suarez Zapata" />
        </div>

        <div className="Casillas form-group">
           <label for="inputEmail"> Correo Electrónico: </label>
           <input type="email" id="inputEmail" className="form-control" placeholder="zapataA.12@gmail.com" />
        </div>

        <div className="Casillas form-group">
           <label for="inputPassword"> Contraseña: </label>
           <input type="password" id="inputPassword" className="form-control" placeholder="Alber.12zapata" />
        </div>

        <button className="BotonR btn-lg btn-light " type="submit" /*onClick={() => history.push('/BuscarMadre')}*/ >
          Registrar
        </button>
      </form>

    </div>
  );
};

export default withRouter (RegistroObstetra);