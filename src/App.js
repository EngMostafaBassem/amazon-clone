import React,{useReducer} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Container from './Components/Container/Container'
import Card from './Components/Card/Card'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import CartData from './cartContext'


function App() {

  const cartReducer=(state,action)=>{
    switch(action.type){
      case 'addCart':
        return {...state,carts:[...state.carts,action.payload]};

      case 'updateCart':
        const cartIndex=state.carts.findIndex(cart=>cart.id===action.payload.id)
        const updateCart=[...state.carts]
        updateCart[cartIndex].qty=action.payload.val;
        updateCart[cartIndex].totalPrice="$"+(parseInt( updateCart[cartIndex].price.slice(1))*parseInt(updateCart[cartIndex].qty)).toString()   
        return {...state,carts:[...updateCart]};
       
        

      case 'deleteCart':
          let cartIndexForDelete=state.carts.findIndex(cart=>cart.id===action.payload)
          console.log('to be delete ',action.payload)
          let updateCartForDelete=[...state.carts]
          updateCartForDelete.splice(cartIndexForDelete,1)
          console.log(updateCartForDelete)
          return {...state,carts:updateCartForDelete};

      default:
        return state  
    }

  }

  const [state, dispatch] = useReducer(cartReducer, {carts:[]})
  return (
    <div>
      <BrowserRouter>
      <CartData.Provider value={{state,dispatch}}>
      <Header/>
       <Switch> 
         <Route path="/checkcarts" exact render={()=><Cart/>}/>    
         <Container>
         <Route path="/" exact render={()=><Main/>}/>    
       </Container>    
       </Switch>
       </CartData.Provider>
       </BrowserRouter>
    </div>
  );
}

export default App;
