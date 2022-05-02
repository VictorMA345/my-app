import './App.css';

import { useEffect,useState }from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Rutas from './Rutas';
import { db } from "./firebase-config";
import {collection,doc,getDocs} from "firebase/firestore";
function App() {
  const [computadoras,setComputadoras] = useState([])
  const compRef = collection(db,"computadoras")
  useEffect(() =>{
      const getComputadoras = async () => {
          const data = await getDocs(compRef)
          setComputadoras(data.docs.map((doc) => ({...doc.data(),id:doc.id})))

      }
      getComputadoras()
  }, [] )
  const [cartItems,setItems] = useState([])
  const handleAddProduct = (compu) =>{
    
    const productExists = cartItems.find((item) => item.id === compu.id);
    
    if (productExists){
      setItems(cartItems.map((item) => item.id ===compu.id ?
      {...productExists,quantity: productExists.quantity + 1}:item ))
      
    }
    else{ 
      setItems([...cartItems,{...compu,quantity:1}])
    }
  }
  const handleRemoveProduct = (compu) => { 
    const productExists = cartItems.find((item) => item.id === compu.id);
    if (productExists.quantity === 1){
      setItems(cartItems.filter((item) => item.id !== compu.id));

    }else{
      setItems(cartItems.map((item) => item.id === compu.id  ? {...productExists,quantity:productExists.quantity -1}:item))
    }

  }
 const Clearance = () =>(
  setItems([])
 );

  return (
    <div>
    <Router>
      <Rutas cartItems={cartItems} handleAddProduct={handleAddProduct} computadoras = {computadoras} handleRemoveProduct={handleRemoveProduct} Clearance = {Clearance}/>
    </Router>
    </div>
  );
}

export default App;
/*
*/