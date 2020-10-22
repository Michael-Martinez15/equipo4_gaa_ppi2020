import React, { Fragment } from "react";
import { Button } from 'react-bootstrap';
import "../style/Calendar.css";

import Calendar from "../components/Calendar";

function App(props) {
  const { history } = props;
  return (
    <Fragment>
      <section className="ca hero is-primary">
        <div className="hero-body">
          <div className="CalendarioCompleto">
            <h1 className="TituloCalendario">
              <Button className="FlechaAtras btn-light" onClick={() => history.push('/InicioPrincipal')}>
               <img className="img" src="../img/FlechaA.png" alt="" />
              </Button>{" "} 
              Calendario 
               <img className="Calendario2" src="./img/Calendario.png" alt="Calendario"/>
            </h1>
          </div>
        </div>
      </section>
      <div className="container has-text-centered">
        <Calendar />
      </div>
    </Fragment>
  );
}

export default App;