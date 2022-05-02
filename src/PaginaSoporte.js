import React from "react";
import BreadCrumbsComponent from "./BreadCrumbsComponent";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField } from "@mui/material";
function PaginaSoporte(){
    return(
        
        <div>
        <Navbar/>
        <BreadCrumbsComponent/>
        <h1 style={{color:"white" , fontSize: "50px"}}>
                Bienvenido al soporte técnico de A-Tech
        </h1>
        <h1 style={{color:"white" , fontSize: "20px",marginTop: "10%"}}>
        ¿En que podemos ayudarle?
        </h1>
        <TextField id="outlined-basic" label="Escriba su consulta y en breve le responderemos" variant="outlined" style={{backgroundColor:"white",width :"700px"}}/>
        <Button variant="contained" style={{height:"55px"}}>

            <ArrowRightAltIcon />   
        </Button>
        </div>
    );
}
export default PaginaSoporte;