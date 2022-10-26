import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../image/v_ng_20.png';



const ProductItem = (props) => {
  const nav = useNavigate()
  // const goToDetail = ()=>{
  //     nav(`detail/${props.id}/`)


  // }
  const formatPrice = (props.price).toLocaleString('en-US');
  return (

    <Link to={`/products/${props.id}`} className='nav-link' >
      <div className="item-card">
        <img
          src={props.image}
          width={300}
          height={250}
          className="item-image"
        />
        <p style={{ fontWeight: '650px', }}>{props.name}</p>
        <p style={{ fontWeight: '850px', marginTop: '0px', color: 'blue' }}>{formatPrice}</p>
      </div>
    </Link>

  )
}

export default ProductItem