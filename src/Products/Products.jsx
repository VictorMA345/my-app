
import React from "react";
import "./Products.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";
export default function Products(props){
    return(
        <div className="products">
             {props.computadoras.map((compu) => {
            
            return(
                <div className="card">
                         <img className = "product-image" src = {compu.Imagen} alt= {compu.Nombre}/>
                    
                    <h3 className="product-name"> 
                        {compu.Nombre}
                    </h3>
                    <div className="product-price">
                        Precio: {compu.Precio} ₡
                    </div>
                    <div >
                        
                        <Button className="product-cart" onClick ={() => props.handleAddProduct(compu)} style = {{backgroundColor: "black",color:"white"}}>
                        Añadir al carro {"   "}
                        <AddShoppingCartIcon/>
                        </Button>
                    </div>
                </div>  
            );
        })}
        </div>
    );
}
