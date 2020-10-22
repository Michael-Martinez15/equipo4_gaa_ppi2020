import React from "react";
import { Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import "../style/Perfil.css";


const Perfil = (props) => {
   const { history } = props;

 return (
    <div className="Perfil1">
      <form className="form-signin">
        
        <h1 className="TituloPerfil">
         <Button className="FlechaAtras btn-light" onClick={() => history.push("/BuscarMadre")} >
          <img className="img" src="../img/FlechaA.png" alt="" />
         </Button>{" "}
           Perfil  
        </h1>
         
        </form>

        <div classname="Vil">
           <img className="imgUsuario" src="../img/PerfilU.png" alt="" />
           <h4 className="Correov"> Vilma1504@gmail.com </h4>
        </div>

        <div className= "Desc3">
            <h4 className="Desc"> Descripción de sus citas: </h4>
        </div>

        <div className="CitaM">
           <label for="inputCit" className=" CitaM"> </label>
           <input type="muje" id="inputCit" className="form-control2" placeholder="Tomar Agua y descansar." required="" autofocus="" />
        </div>
        
        <div className="Obs">
           <h4 className="Desc"> Dejar observación: </h4>
           <label for="inputCit" className=" CitaMu"> </label>
           <input type="muje" id="inputCit" className="form-control3" placeholder="Recuerda Cuidarte." required="" autofocus="" />
        </div>
        
        
        <div className="EnviarB">
          <Button className="Enviar2 btn btn-light" data-toggle="modal" data-target="#ModalEnviar" >  
             <h5>Enviar</h5>
          </Button>{' '}
        </div>

        <div className="modal" id="ModalEnviar" tabindex="-1" role="dialog">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
               <div className="Gmail">
               <img className="LogoGmail" src="../img/Gmail.jpg" alt="" /><p className="TGmail"> Gmail </p>
               </div>
            </div>
            <div className="modal-body">
              <p className="textoModal">
                <h4>
                   Luis Rodriguez Zapata.
                </h4>
                <h5>
                   Observación del Obstetra.
                </h5>
                <h6>
                   Recuerda cuidarte.
                </h6>
              </p>
              <button type="button" className="btnMas" data-toggle="modal" data-target="#ModalTexto">
                <img className="LogoMas" src="../img/Mas.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="ModalTexto" tabindex="-1" role="dialog">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
               <div className="Gmail">
               <img className="LogoPrin" src="../img/SMS.jpg" alt="" /><p className="TGmail"> Mensajes </p>
               </div>
            </div>
            <div className="modal-body">
              <p className="textoModal">
                <h4>
                  Nine Months Of Love
                </h4>
                <h5>
                Observación del Obstetra.
                </h5>
                <h6>
                Recuerda cuidarte.
                </h6>
              </p>
              <button type="button" className="btnMas" data-toggle="modal" data-target="#ModalRecordatorio">
                <img className="LogoMas" src="../img/Mas.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="ModalRecordatorio" tabindex="-1" role="dialog">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
               <div className="Gmail">
               <img className="LogoPrin" src="../img/LogoPrincipal.png" alt="" /><p className="TGmail"> Nine Months Of Love </p>
               </div>
            </div>
            <div className="modal-body">
              <p className="textoModal">
                <h4>
                   Recordatorio.
                </h4>
                <h5>
                   Próxima Cita.
                </h5>
                <h6>
                   Tienes una cita Mañana, 11 de Octubre a la 1:30 p.m.
                </h6>
              </p>
              <button type="button" className="btnMas" >
                <img className="LogoMas" src="../img/Mas.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

     </div>   
 )
};


export default withRouter (Perfil);