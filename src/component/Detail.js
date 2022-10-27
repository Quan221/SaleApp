import "../App.css"
import React from "react";
import { Button, Image, Toast, } from "react-bootstrap";
import { BsArrowLeft, IconName } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Test from "../image/t_m_18.png";
import { useStateContext } from "../reducer/StateContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import Api, { authApi, endpoints } from "../configs/Api";
import { Toaster } from "react-hot-toast";
const Detail = () => {
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const [detail, setDetail] = useState({})
    const { productsId } = useParams()

    useEffect(() => {
        const loadDetail = async () => {

            let res = await Api.get((endpoints['products-detail'](productsId)))
            // res.data.price = res.data.price.toLocaleString('en-US')
            setDetail(res.data)
            console.log(res.data)


        }

        loadDetail()

    }, [])

    return (
        <>
            <div className="detail" >
                <div className="detail-left">
                    <div className="detail-image" >

                        <Image src={detail.image} style={{ width: '408px', height: '464px' }} />
                    </div>




                </div>
                <div className="detail-right">
                    <Link to='/homepage' className="nav-link" >
                        <div className="btn-back"  >
                            <BsArrowLeft style={{ color: 'black', fontSize: '40px', marginLeft: '50px', marginTop: '50px' }}></BsArrowLeft>
                            <h2 style={{ marginTop: '50px', marginLeft: '5px' }}>Back</h2>
                        </div>
                    </Link>
                    <h1 style={{ marginLeft: '130px' }} >{detail.name}</h1>
                    {/* <h3 style={{marginLeft:'125px'}} >Be Friend</h3> */}
                    <div style={{ width: '420px', height: '418px', marginLeft: '250px', display: 'block', padding: '3px', position: "absolute", left: "600px", top: "353px" }}>
                        <div>

                            <h2 style={{ color: 'red' }} >Đặc Điểm Nổi Bật :  <br /></h2>
                            <span className="content" ><br />  {detail.description}</span>
                        </div>
                        <div className="quantity">
                            <h4>Quantity:</h4>
                            <p className="quantity-desc">
                                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                                <span className="num">{qty}</span>
                                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                            </p>
                        </div>
                        <div style={{ justifyContent: 'space-between', display: 'flex' }} >
                            <div><p>Price : </p></div>
                            <div><h2>{detail.price} VND</h2></div>
                        </div>


                        <Button style={{ width: "392px", height: "48px", margin: '10px' }} variant="success" onClick={() => onAdd(detail, qty)} >AddToCard</Button>


                    </div>

                </div>
            </div>
            <Toaster />
        </>
    )

}
export default Detail;