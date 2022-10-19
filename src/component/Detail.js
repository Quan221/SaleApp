import "../App.css"
import React from "react";
import { Button, Image, } from "react-bootstrap";
import { BsArrowLeft, IconName } from "react-icons/bs";
import { Link } from "react-router-dom";
import Test from "../image/t_m_18.png";
import { useStateContext } from "../reducer/StateContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Detail = () => {
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

return(
    <>
    <div className="detail" >
        <div className="detail-left">
            <div className="detail-image" >
                <Image src={Test} style={{width: '408px', height: '464px' }} />
            </div>




        </div>
        <div className="detail-right">
            <Link to='/' className="nav-link" >
            <div className="btn-back"  > 
            <BsArrowLeft style={{color: 'black', fontSize: '40px', marginLeft: '50px', marginTop: '50px'}}></BsArrowLeft>
            <h2 style={{marginTop:'50px',marginLeft: '5px'}}>Back</h2>
            </div>
            </Link>
            <h1  >Welcome</h1>
            {/* <h3 style={{marginLeft:'125px'}} >Be Friend</h3> */}
            <div style={{width: '420px', height: '418px', borderStyle: 'solid',marginLeft: '250px',display: 'block', padding: '3px', position: "absolute", left:"600px", top : "353px"}}>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                    </p>
                </div>
                    
                
                <Button style={{position: 'absolute', bottom: "10%",width : "392px", height: "48px"}} variant="success" ><Link to='/category' className="nav-link" >AddToCard</Link></Button>


            </div>

        </div>
    </div>
    </>
)

}
export default Detail;