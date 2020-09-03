import React,{useEffect,useState} from 'react'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import axios from 'axios'

const Main=()=>{
      const [products,setProducts]=useState([])

      useEffect(() => {

           /*

      axios.get('https://amazon-product-search.p.rapidapi.com/amazon-search/search?search=iPhone&region=com&page=1',{
            headers:{
                  "x-rapidapi-host": "amazon-product-search.p.rapidapi.com",
                  "x-rapidapi-key": "5ee9cfdef9mshc6e262920e5d7c6p1fd8c1jsn6d9a7d332e37"
            }
      }).then(res=>setProducts(res.data.result))
        .catch(err=>console.log(err))
         */
          
           
      }, [])
return(
    <div>
         <Hero/>
         <div className="row main">

               
         <Card img="https://m.media-amazon.com/images/I/51t6VwlvKTL._AC_SR160,160_.jpg"
               name="HeadPhone"
               rating={5}
               price="$1200"
               id="0"
               qty={4}
         />
          <Card img="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6169B6EC05731T._V531815324_.jpg"
               name="HeadPhone"
               rating={4}
               price="$1200"
               id="1"
               qty={4}
         />
          
         </div>

         <div className="row">

         <Card img="https://m.media-amazon.com/images/I/51t6VwlvKTL._AC_SR160,160_.jpg"
               name="HeadPhone"
               rating={5}
               price="$200"
               id="2"
               qty={4}
         />
          <Card img="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6169B6EC05731T._V531815324_.jpg"
               name="HeadPhone"
               rating={4}
               price="$1400"
               id="3"
               qty={4}
         />
          <Card img="https://m.media-amazon.com/images/I/51t6VwlvKTL._AC_SR160,160_.jpg"
               name="HeadPhone"
               rating={5}
               price="$500"
               id="4"
               qty={4}
         />
          <Card img="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6169B6EC05731T._V531815324_.jpg"
               name="HeadPhone"
               rating={4}
               price="$600"
               id="5"
               qty={4}
         />
          <Card img="https://m.media-amazon.com/images/I/51t6VwlvKTL._AC_SR160,160_.jpg"
               name="HeadPhone"
               rating={5}
               price="$800"
               id="6"
               qty={4}
         />
          <Card img="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6169B6EC05731T._V531815324_.jpg"
               name="HeadPhone"
               rating={4}
               price="$1200"
               id="7"
               qty={4}
         />
          <Card img="https://m.media-amazon.com/images/I/51t6VwlvKTL._AC_SR160,160_.jpg"
               name="HeadPhone"
               rating={5}
               price="$830"
               id="8"
               qty={4}
         />
          <Card img="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6169B6EC05731T._V531815324_.jpg"
               name="HeadPhone"
               rating={4}
               price="$120"
               id="9"
               qty={4}
         />
       
         
         </div>

        
    </div>
)
}
export default Main