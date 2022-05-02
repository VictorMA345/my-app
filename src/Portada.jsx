import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import portada from "./Portada.png"
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Portada(){
    return(
        <>
        <Container style={{ color:'White',width: "300px", marginTop:"9%",marginLeft:"30%"}}>
            
        <Typography variant="h4" style={{ fontWeight: 600 ,marginLeft:"-100%",font:"work-sans"}}>
        Mejores computadores y 
        artículos tecnológicos al mejor precio
        </Typography>
        <Button variant="outlined" 
            href = "/ventas"
             style={{
                marginLeft: "-100%",
                marginTop: "15%",
                maxWidth: "150px",
                maxHeight: "50px",
                minWidth: "150px",
                minHeight: "50px",
                color: "black",
                background: "white"
              }}>
                  <AddShoppingCartIcon/>
                   <Typography >
                        Comprar ahora
                    </Typography>
            </Button>
        <img src = {portada} style={{marginLeft:"110%" ,width:"400px",marginTop:"-200%"}}/>
        
        </Container>
        </>
    );
}