import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../style/Bienvenida.css";

const Bienvenida = (props) => {
  const { history } = props;

  return (
    <div className="Bienvenida">
      <h1 className="Bienve"> Bienvenidad a </h1>
      <h2 className="Nine"> NINE MONTHS </h2>
      <h2 className="Nine"> OF LOVE </h2>
      <img
        className="Logito"
        src="../img/LogoPrincipal.png"
        alt="LogoPrincipal"
      />

      <div className="SiguienteB">
        <Button
          className="Siguiente btn-light"
          onClick={() => history.push("/TipoUsuario")}
        >
          Siguiente
        </Button>{" "}
      </div>
    </div>
  );
};

export default withRouter(Bienvenida);
