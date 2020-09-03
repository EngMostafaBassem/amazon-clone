import React,{useEffect,useState,useContext} from 'react'
import './CartTotal.css'
import CartData from '../../cartContext'
import cartData from '../../cartContext'
const CartTotal=()=>{
  const {state}=useContext(cartData)
  const [total,setTotal]=useState(0)
  useEffect(()=>{
          setTotal(state.carts.reduce((init,cart)=>init+=parseInt(cart.totalPrice.slice(1)),0))
  },[state])
  return(
      <div className="checkout">
          <p className="checkout__total">Subtotal (1 item): <span className="total_price">$ {total}</span></p>
          <div className="giftContainer">
             <input type="checkbox" id="gift" name="gift" />
             <label>This Order Contain a gift</label>
          </div>
          <button className="checkout__btn">Proceed to checkout</button>
      </div>
  )
}
export default CartTotal