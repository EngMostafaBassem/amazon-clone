import React,{useEffect,useContext,useState} from 'react'
import './Cart.css'
import CartInfo from '../CartInfo/CartInfo'
import CartTotal from '../CartTotal/CartTotal'
import CartData from '../../cartContext'
const Cart=()=>{
    const {state,dispatch}=useContext(CartData)
    const[carts,setCarts]=useState([])
useEffect(()=>{

   
   setCarts(state.carts)
},[state])

return(
    <div className="Cart">
        <h2>Shopping Cart</h2>
       
        <div className="CartContainer"> 
        <div className="Carts">
        <p style={{width:'100%',textAlign:'right',color:'#555',paddingRight:'1rem',fontSize:'0.8rem'}}>Price</p>
       {
           carts.map(cart=> <CartInfo 
            key={cart.id}
            id={cart.id}
            img={cart.img}
            itemDescription={cart.name}
            price={cart.price}    
            itemStatus="In Stock"
            exist={cart.exist}
            qty={cart.qty}
           

            />)
       }
       

         </div>

         <CartTotal/>
         </div>
    </div>
)
}

export default Cart