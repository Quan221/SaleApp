import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../image/v_ng_20.png';



const ProductItem = (props) => {
  const nav = useNavigate()
  // const goToDetail = ()=>{
  //     nav(`detail/${props.id}/`)


  // }
  return (
    
      <Link to={`/products/${props.id}`} className= 'nav-link' >
        <div className="item-card">
          <img 
            src={props.image}
            width={300}
            height={250}
            className="item-image"
          />
          <p style={{fontWeight: '600px',}}>{props.name}</p>
          <p style={{fontWeight: '850px', marginTop: '0px', color : 'blue'}}>{props.price}</p>
        </div>
      </Link>
    
  )
}

export default ProductItem