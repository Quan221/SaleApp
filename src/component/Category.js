import React from "react";
import { Button } from "react-bootstrap";


const Category = () => {


    return (


        <>
            <div className="bill" >
                <h1 style={{verticalAlign: "top" }}>Oder Iphone 14</h1>
                <p style={{paddingLeft: "50px"  }} >27 September 2022</p>
                <Button variant="success" style={{position: 'absolute', bottom: "10%",marginLeft: '50px', right:"20px"  }} >AddToCard</Button>
            </div>
        </>
    )
}
export default Category ;