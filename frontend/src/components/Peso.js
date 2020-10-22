import React from "react";
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import "../style/Peso.css";

const Peso = (props) => {
  const { history } = props;
  return (
    <div className="Peso3">
      <form className="form-signin">
        <h1 className="TituloPeso">
        <Button className="FlechaAtras btn-light" onClick={() => history.push("/InicioPrincipal")}>
          <img className="img" src="../img/FlechaA.png" alt="" />
        </Button>{" "}
          MI PESO <img className="Logp" src="../img/Peso.png" alt="" />{" "}
        </h1>

        <div className="PesoMes">
          <p className="PesT"> Mes 1: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes1" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes4" className="form-control1" placeholder="Ej: 50 kg"/>
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>
      
        <div className="PesoMes">
          <p className="PesT"> Mes 2: </p>
          </div>

        <div className="PesoMes">
          <label for="inputMes2" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes2" className="form-control1" placeholder="Ej: 52kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>

        <div className="PesoMes">
          <p className="PesT"> Mes 3: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes3" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes3" className="form-control1" placeholder="Ej: 53kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>

        <div className="PesoMes">
          <p className="PesT"> Mes 4: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes4" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes4" className="form-control1" placeholder="Ej: 54kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>

        <div className="PesoMes">
          <p className="PesT"> Mes 5: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes5" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes5" className="form-control1" placeholder="Ej: 55kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>
        
        <div className="PesoMes">
          <p className="PesT"> Mes 6: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes6" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes6" className="form-control1" placeholder="Ej: 58kg" />
         <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
        </Button>{" "}
        </div>
 
        <div className="PesoMes">
          <p className="PesT"> Mes 7: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes7" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes7" className="form-control1" placeholder="Ej: 62kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>

        <div className="PesoMes">
          <p className="PesT"> Mes 8: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes8" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes8" className="form-control1" placeholder="Ej: 65kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal">
            Guardar 
          </Button>{' '}
        </div>

        <div className="PesoMes">
          <p className="PesT"> Mes 9: </p>
        </div>

        <div className="PesoMes">
          <label for="inputMes9" className="sr-only"> {" "} </label>
          <input type="text" id="inputMes9" className="form-control1" placeholder="Ej: 69kg" />
          <Button className="GuardarP btn-light" data-toggle="modal" data-target="#ventanaModal" >
            Guardar 
          </Button>{' '}
        </div>

        <div className="modal" id="ventanaModal" tabindex="-1" role="dialog">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img className="LogoModal" src="../img/LogoPrincipal.png" alt="" />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="textoModal">
                El peso ha sido guardado exitosamente.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn botonModal" data-dismiss="modal">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      
    
     </form>
    </div>
    
  );
};


export default withRouter(Peso);