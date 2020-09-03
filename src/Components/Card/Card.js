import React,{useContext,useState} from 'react'
import './Card.css'
import StarRateIcon from '@material-ui/icons/StarRate';
import CardData from '../../cartContext'
import Swal from 'sweetalert2'
const Card=({id,qty,img,name,rating,price})=>{

const {state,dispatch}=useContext(CardData)

    return(
        <div className="Card">



              <div className="Card__img">
                   <img src={img}/>

              </div>

              <div className="Card__name">
                <h2>{name}</h2>          
              </div>

              <div className="Card__rating">
                  {
                      Array(rating).fill().map((_,i)=><StarRateIcon className="ratingIcon"/>)
                  }
             
               
              </div>

              <div className="Card__price">
                  <p>{price}</p>
              </div>

              <div className="Card__btn">
                    <button onClick={()=>{
                          
                        dispatch({type:'addCart',payload:{id,qty:1,img,name,price,rating,exist:4,totalPrice:price}})
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Added To Chart',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    
                    }}
                    
                    
                        >Add To Chart</button>
              </div>
        </div>
    )
}
export default Card