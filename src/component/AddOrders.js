import React, { useState } from "react";
import { Button, FormControl, InputGroup, Form, Container, Toast } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { authApi, endpoints } from "../configs/Api";
import { useStateContext } from "../reducer/StateContext";
import Category from "./Category";

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
    const { cartItems, setCartItems, setTotalQuantities } = useStateContext()
    const Addorders = (event) => {
        event.preventDefault()


        let AddOder = async () => {
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
            setAddress('')
            setCartItems([])
            setTotalQuantities(0)


        }

        AddOder()
        toast.success('Successfully!')



    }


    return (
        <Container>
            {/* <Form onSubmit={Addorders}> */}
            {/* <Button variant="primary" type='submit' >Accept</Button>  */}

            {/* </Form> */}
            <div style={{ margin: '5px', display: "flex", width: '100%', flexWrap: 'wrap', }} >
                {cartItems.map(c => {
                    return <Category id={c.id} image={c['image']} name={c['name']} price={c.price} title={c.title} quantity={c.quantity} />
                })}
            </div>
            <div className="add-address"  >
                <InputGroup size="sm" className="mb-3" style={{ margin: "10px", width: "80%" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm">Nhap Dia Chi</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        type="text"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </InputGroup>
                <button onClick={Addorders} >Dang ky</button>
                <Toaster />

            </div>


        </Container>
    )
}

