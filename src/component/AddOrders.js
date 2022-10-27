import React, { useState, useRef } from "react";
import { Button, FormControl, InputGroup, Form, Container, Toast, Alert, Row, Col } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { authApi, endpoints } from "../configs/Api";
import { useStateContext } from "../reducer/StateContext";
import Category from "./Category";
import Payment from "./Payment";


// function AddOrderForm(props) {
//     return (
//     <Form.Group className="mb-3">
//         <Form.Label>{props.label}</Form.Label>
//         <Form.Control type={props.type} 
//                       value={props.value}
//                       onChange={props.change} />
//     </Form.Group>
//   )
//   } 

export default function AddOrder() {
    const [address, setAddress] = useState()
    const { cartItems, setCartItems, setTotalQuantities, setTotalPrice, totalPrice } = useStateContext()
    const price = (parseFloat(totalPrice) / 24000).toFixed(2)



    let AddOrder = async () => {
        const formData = new FormData()
        formData.append("ship_address", address)
        try {
            const res = await authApi().post(endpoints['addorder'], formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            cartItems.map(c => {

                let AddItem = async () => {
                    const formData2 = new FormData()
                    formData2.append("order", res.data.id)
                    formData2.append("product", c.id)
                    formData2.append("quantity", c.quantity)
                    formData2.append("discount", 0)
                    const res2 = await authApi().post(endpoints['additems'], formData2, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })

                }
                AddItem()


            })

        } catch (err) {
            console.error(err)
        }
        setCartItems([])
        setTotalQuantities(0)
        setTotalPrice(0)
        setAddress('')

    }





    let body = <>
        <Container>
            <Alert variant="danger">
                Chưa có đơn hàng
            </Alert>

        </Container>




    </>


    if (cartItems.length > 0) {
        body = <>

            <Container>
                <div>
                    {cartItems.map(c => {
                        return <Category id={c.id} image={c['image']} name={c['name']} price={c.price} title={c.title} quantity={c.quantity} />
                    })}
                </div>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Địa chỉ giao hàng: </Form.Label>
                            <Form.Control
                                type="text"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </Form.Group></Col>
                    <Col></Col>
                </Row>


                <Payment total={price} AddOrder={AddOrder} />




            </Container>

        </>
    }



    return (
        <>

            {body}
            <Toaster />
        </>
    )
}

