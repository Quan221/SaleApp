import React from "react";
import { Button, Image } from "react-bootstrap";
import Test from "../image/t_m_18.png";

const Category = (props) => {


    return (



        <div className="bill" >
            <div className="content-category">
                <h1 style={{ verticalAlign: "top" }}>{props.name}</h1>
                <h2 style={{ paddingLeft: "10px" }} >Số Lượng : {props.quantity}</h2>
                <br />
                <div className="price-bill" >
                    <h3>Price </h3>
                    <h3 >{props.price} VNĐ </h3>
                </div>
            </div>
            <div className='img-category'>
                <Image src={props.image} style={{ width: '300px', height: '200px', paddingRight: '5px' }} />
            </div>
        </div>

    )
}
export default Category;