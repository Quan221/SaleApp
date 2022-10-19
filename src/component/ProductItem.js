import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../image/v_ng_20.png';



const ProductItem = () => {
  return (
    
      <Link to='/detail' className='nav-link' >
        <div className="item-card">
          <img 
            src={profile}
            width={300}
            height={250}
            className="item-image"
          />
          <p style={{fontWeight: '600px',}}>Iphone</p>
          <p style={{fontWeight: '850px', marginTop: '0px', color : 'blue'}}>$8000</p>
        </div>
      </Link>
    
  )
}

export default ProductItem