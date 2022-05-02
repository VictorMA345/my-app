import React from 'react'
import Navbar from './Navbar'
import BreadCrumbsComponent from './BreadCrumbsComponent'
import "./Cart.css"
const Cart = (props) => {

  return (
    <>
    <Navbar/>
    <BreadCrumbsComponent/>
    <div className='cart-items'>

       <div className='cart-items-header'> Cart Items</div>
       
        {props.cartItems.length === 0 && (<div className='cart-items-empty'>No items in the cart <br>
        </br> Precio Total: 0
        </div>
        )}
        <div>
        
          {props.cartItems.map((item) => (
            <div key = {item.id} className="cart-items-list">
              <img className = "cart-item-image" src = {item.Imagen} alt= {item.Nombre}/>
              <div className='cart-items-name'>
                  {item.Nombre}
              </div>
              <div className='cart-items-function'>
                  <button className='cart-items-add' onClick={() => props.handleAddProduct(item)}>
                      +
                  </button>
                  <button className='cart-items-remove ' onClick={() => props.handleRemoveProduct(item)}>
                      - 
                  </button>
              </div>
              <div className='cart-items-price'>
                  Precio: {item.Precio}
              </div>
              <div className='cart-items-quantity'>
                 Cantidad: {item.quantity}
              </div>
              <div className='cart-items-totalprice'>
                  Precio Total: {item.quantity * item.Precio} 
              </div>
            </div>
            
          ))}
        </div>
        <button className='clearanceButton' onClick={props.Clearance}>
            Comprar
        </button>
        
    </div>
    </>
  )
}

export default Cart