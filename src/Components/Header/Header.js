import React,{useContext} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import { Link } from 'react-router-dom';
import CartData from '../../cartContext'
const Header=()=>{
  const {state,dispatch}=useContext(CartData)
    return(
        <div className="header">
          <Link to="/">
           <div className="header__logo">
             <img src={require('../../Assets/Images/amazon4.png')}/>
           </div>
           </Link>

             <div className="header__search">
               
                   <input className="header__search--input" type="text"/>
                
                   <SearchIcon className="header__search--icon"/>
                       
             </div>

             <div className="header__info">
                  <div className="header__info--1">
                     <span>Hello,Mostafa</span>
                     <span>Account & Lists</span> 
                  </div>  

                  <div className="header__info--2">
                     <span>Returns</span>
                     <span>& Orders</span> 
                  </div>  
                  <Link to="/checkcarts" className="link">
                  <div className="header__info--3">
                    
                      <div className="header__cart">
                     
                      <span className="header__Cart--value">{state.carts.length}</span>   
                      <ShoppingCartIcon/> 
                                 
                      </div>               
                      <span>Cart</span>         
                  </div>  
                  </Link>
                   </div>
                  
             
            
            </div>


    )
}
export default Header