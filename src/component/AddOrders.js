import React, { useState } from "react";
import { Button, FormControl, InputGroup, Form, Container, Toast } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { authApi, endpoints } from "../configs/Api";
import { useStateContext } from "../reducer/StateContext";
import Category from "./Category";
import { PayPalButtons } from '@paypal/react-paypal-js'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


export default function AddOrder() {
    const [address, setAddress] = useState()
    const { cartItems, setCartItems, setTotalQuantities, setTotalPrice, totalPrice } = useStateContext()

    const Addorders = () => {
        const place = document.getElementById('address').value
        let AddOder = async () => {
            const formData = new FormData()
            formData.append("ship_address", place)
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


        }

        AddOder()



    }
    const handleApprove = () => {

        Addorders()
        toast.success('Successfully!')

    }
    let body = <>
        <h1 style={{ textAlign: 'center' }} >Chua co don hang</h1>



    </>
    if (cartItems.length > 0) {
        body = <>

            <Container>
                <div style={{ margin: '5px', display: "flex", width: '100%', flexWrap: 'wrap', }} >
                    {cartItems.map(c => {
                        return <Category id={c.id} image={c['image']} name={c['name']} price={c.price} title={c.title} quantity={c.quantity} />
                    })}
                </div>
                <div className="add-address"  >
                    <InputGroup size="sm" className="mb-3" style={{ margin: "10px", width: "80%" }}>
                        <InputGroup.Text id="inputGroup-sizing-sm">Nhap Dia Chi</InputGroup.Text>
                        <Form.Control
                            id="address"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            type="text"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </InputGroup>


                </div>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({

                            purchase_units: [
                                {
                                    description: 'Payment',
                                    amount: {
                                        value: (parseFloat(totalPrice) / 24000).toFixed(2)


                                    }
                                }
                            ]
                        })
                    }}
                    onApprove={async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log("order: ", order)
                        handleApprove()
                    }}
                    onError={(err) => {
                        console.log("Error: ", err)
                    }

                    }
                />


            </Container>

        </>
    }


    return (
        <>
            <PayPalScriptProvider options={{
                "client-id": "ARPZplyh7bDL43TQSiqTF3Tf7ytbjE5vNvZsUzrPfLunZfbioCY2KNWrQIVzgI08NOvJW2xTNSi5GOhi"
            }}>
                {body}
                <Toaster />
            </PayPalScriptProvider>
        </>
    )
}
