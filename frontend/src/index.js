import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Ppicontainer from "../src/container/Ppicontainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
 
    <Ppicontainer />,
  rootElement
)
