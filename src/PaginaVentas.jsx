import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import BreadCrumbsComponent from "./BreadCrumbsComponent";
import Products from "./Products/Products";
function PaginaVentas(props){
    const funcion =  props.handleAddProduct
    return(
        <>
            <Navbar/>
            <BreadCrumbsComponent/>
            <Products computadoras = {props.productos} handleAddProduct = {funcion}/>
        </>
    );
}
export default PaginaVentas;