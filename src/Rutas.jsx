import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import PaginaPrincipal from './PaginaPrincipal';
  import PaginaVentas from './PaginaVentas';
  import PaginaSobreNosotros from './PaginaSobreNosotros'
  import PaginaSoporte from './PaginaSoporte';
  import Cart from './Cart';
const Rutas = (props) => {
  return (

    <div className="App">
       
        <Routes>
          <Route path="/"element={<PaginaPrincipal />}>
                
          </Route>
          <Route path="/ventas"element={<PaginaVentas productos = {props.computadoras} handleAddProduct = {props.handleAddProduct}/>}>
                
          </Route>
          <Route path="/soporte" element={<PaginaSoporte />}>

          </Route>
          <Route path="/acercade" element={<PaginaSobreNosotros />}>

          </Route>
          <Route path="/cart" element={<Cart cartItems= {props.cartItems} handleAddProduct = {props.handleAddProduct} handleRemoveProduct = {props.handleRemoveProduct} Clearance = {props.Clearance}/>  }>

          </Route>
        </Routes>
    </div>
  )
}

export default Rutas