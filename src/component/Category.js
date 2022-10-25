import React from "react";
import { Button, Image } from "react-bootstrap";
import Test from "../image/t_m_18.png";

const Category = (props) => {


    return (


        
            <div className="bill" >
                <div className="content-category">
                <h1 style={{verticalAlign: "top" }}>{props.name} x {props.quantity}</h1>
                <p style={{paddingLeft: "50px"  }} >{props.title}</p>
                <div className="price-bill" >
                <h3>Price </h3>
                <h3 style={{paddingLeft: "50px"  }}>{props.price} d </h3>
                </div>
                </div>
                <div  className='img-category'>
                    <Image src={props.image} style={{width: '300px', height: '200px', paddingRight: '5px'}}/>
                </div>
            </div>
       
    )
}
export default Category ;