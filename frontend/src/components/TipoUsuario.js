import React from 'react';
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/Sugerencias.css";


const Sugerencias = (props) => {
  const { history } = props;
  return (
    <div className="Sugerencias">
      <h1 className="TituloSuge"> 
      <Button className="FlechaAtras btn-light" onClick={() => history.push("/InicioPrincipal")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "} 
        Sugerencias</h1>
      
      <div className="Prin">
        <h1 className="Elte"> Deja tu sugerencia o comentario aquí </h1>
        <img className="Flechis" src="../img/Flechis.png" alt="" /> 
      </div>
      
      
      <div className="Come">
        <label for="inputSuge" className=" Comen"> </label>
        <input type="Suco" id="inputSuge" className="form-control2" placeholder="Ej:la aplicación me gusta. " required="" autofocus="" />
      </div>
      
      <div className="Manis">
        <h1 className="Let"> ¡ CALIFÍCANOS ! </h1>
      </div>
        
      <div className="Manos">
          <Button className="Mani1 btn btn-light">
            <img className="Megus"
              src="./img/Meg.jpeg"
              alt="Me gusta"/>
          </Button>{' '}
          
          <Button className="Mani2 btn btn-light">
           <img className="Megus"
             src="./img/Nom.jpeg"
             alt="No me gusta"/>
          </Button>{' '}
      </div>

      <div className="Espacio9">
        <Button className="Enviar btn btn-light" onClick={() => history.push('/Gracias')}>  
             <h5> Enviar </h5>
        </Button>{' '}
      </div>
</div>
)
};


export default withRouter (Sugerencias);