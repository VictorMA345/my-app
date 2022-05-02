import React from "react";
import Navbar from "./Navbar";
import BreadCrumbsComponent from "./BreadCrumbsComponent"

function PaginaSobreNosotros(){
    return(
        <div>
             <Navbar/>
            <BreadCrumbsComponent/>
            <h1 style={{color:"white"}}>
                Sobre Nosotros
            </h1>
        </div>
    );
}
export default PaginaSobreNosotros;