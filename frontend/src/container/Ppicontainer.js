import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "../style/Ppicontainer.css";


import ComoMujer from '../components/ComoMujer';
import ComoObstetra from '../components/ComoObstetra';
import TipoUsuario from '../components/TipoUsuario';
import Bienvenida from '../components/Bienvenida';
import RegistroMujer from '../components/RegistroMujer';
import RegistroObstetra from '../components/RegistroObstetra';
import InicioMujer from '../components/InicioMujer';
import InicioObstetra from '../components/InicioObstetra';
import InicioPrincipal from '../components/InicioPrincipal';
import Comofun from '../components/Comofun';
import Funcale from '../components/Funcale';
import Funpeso from '../components/Funpeso';
import Peso from '../components/Peso';
import BuscarMadre from '../components/BuscarMadre';
import Sugerencias from '../components/Sugerencias';
import Gracias from '../components/Gracias';
import BuscarMR from '../components/BuscarMR';
import Perfil from '../components/Perfil';
import Agenda from "../components/Agenda";
import Carrusel from "../components/Carrusel";



export default function Ppicontainer (){
  return(
    <div className="Ppicontainer">

      <BrowserRouter>
        <Route exact path="/" component={ Bienvenida } />
        <Route exact path="/TipoUsuario" component={ TipoUsuario } />
        <Route exact path="/ComoMujer" component={ ComoMujer } />
        <Route exact path="/ComoObstetra" component={ ComoObstetra } />
        <Route exact path="/RegistroMujer" component={ RegistroMujer } />
        <Route exact path="/RegistroObstetra" component={ RegistroObstetra } />
        <Route exact path="/InicioMujer" component={ InicioMujer } />
        <Route exact path="/InicioObstetra" component={ InicioObstetra } />
        <Route exact path="/InicioPrincipal" component={ InicioPrincipal } />
        <Route exact path="/Comofun" component={ Comofun } />
        <Route exact path="/Funcale" component={ Funcale } />
        <Route exact path="/Funpeso" component={ Funpeso } />
        <Route exact path="/Peso" component={ Peso } />
        <Route exact path="/BuscarMadre" component={ BuscarMadre } />
        <Route exact path="/Sugerencias" component={ Sugerencias } />
        <Route exact path="/Gracias" component={ Gracias } />
        <Route exact path="/BuscarMR" component={ BuscarMR } />
        <Route exact path="/Perfil" component={ Perfil } />
        <Route path="/Agenda" exact component={ Agenda } />
        <Route path="/Carrusel" exact component={ Carrusel } />
      </BrowserRouter>
      
    </div>
  );
}