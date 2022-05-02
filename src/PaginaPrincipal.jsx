import React from "react";

import Navbar from "./Navbar";
import BreadCrumbsComponent from "./BreadCrumbsComponent"
import Portada from "./Portada";
function PaginaPrincipal(){
    return(
        <div>
             <Navbar/>
            <BreadCrumbsComponent/>
            <Portada/>
        </div>
    );
}
export default PaginaPrincipal;