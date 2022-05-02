import React from "react";
import { Breadcrumbs,Typography, Container, Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom" ;
export default function BreadCrumbsComponent(){
    function changeColorOnEnter(e) {
        e.target.style.color = 'lightgreen';
      }
      function changeColorOnExit(e){
        e.target.style.color = 'white';
      }
    return(
        <>
        <Container style = {{background:"#262B2D",marginLeft:"0%",maxWidth:"1500px"}} >
            <Breadcrumbs aria-label="breadcrumb" separator = "/">
            <Link to="/ventas">
            <Button style ={{color: "WHITE",fontWeight: "bold"}} onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
                Productos
            </Button>
            </Link>
            <Link to="/soporte">
            <Button  style={{color: "WHITE",fontWeight: "bold"}} onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
                Soporte
            </Button>
            </Link>
            <Link to="/acercade">
            <Button href="/acercade" style={{color: "White",fontWeight: "bold"}} onMouseEnter={changeColorOnEnter}
            onMouseLeave = {changeColorOnExit}>
                Sobre Nosotros
            </Button>
            </Link>
            </Breadcrumbs>      
        </Container>
        </>
    );
}