import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import Popper from "popper.js";
import $ from "jquery"
import Nav from "./Nav";
import Home from "./Home";
import './main.css';

const Main = () => {
    return ( 
        <div>
            <Nav/>
            <div className="content">
            <Home/>
            </div>
        </div>
     );
}
 
export default Main;
