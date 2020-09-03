import React,{useContext,useEffect, useState} from 'react'
import CartDate from '../../cartContext'
import './CartInfo.css'
const CartInfo=({id,img,itemDescription,itemStatus,exist,price,qty})=>{

    const {state,dispatch}=useContext(CartDate)

    const updateCart=(val,id)=>{
       // console.log(val+ " "+id)
        dispatch({type:'updateCart',payload:{id,val}})
    }
const [totalPrice,setTotalPrice]=useState(0)
useEffect(() => {
   
    const cart=state.carts.find(cart=>cart.id===id)
    if(cart!=null){
      setTotalPrice(cart.totalPrice)
    }
    
}, [state])

return(
    <div className="CartInfo">
        
        <div className="CartInfo__img">
                <img src={img}/>
        </div>
        <div className="CartInfo__details">   
         <p  className=" CartInfo__description">{itemDescription}</p>
         <p  className=" CartInfo__status">{itemStatus}</p>
       <div  className="CartInfo__gift">
         <input type="checkbox" id="gift" name="gift"/>
         <label>This is a gift</label>
         </div>
         <div className="CartInfo__footer">
         <select className="CartInfo__qty" onChange={(e)=>updateCart(e.target.value,id)} value={qty} >
             {
                 Array(exist).fill().map((_,i)=> <option value={i+1}>Qty:{i+1}</option>)
             }
            
         </select>
         <a href="#" className="CartInfo__delete" onClick={()=>dispatch({type:'deleteCart',payload:id})}>Delete</a>
         
         </div>
        
              
        </div>
        
        <div className="CartInfo__price">
            <p>{totalPrice}</p>
        </div>
    </div>
)
}

export default CartInfo