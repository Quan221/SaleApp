import React, { useState, useContext, useEffect } from 'react'
import { Form, Button, Container, Col, Figure, } from 'react-bootstrap'
import { PayPalButtons } from '@paypal/react-paypal-js'
import toast, { Toaster } from "react-hot-toast";
import { authApi, endpoints } from "../configs/Api";
import { useStateContext } from "../reducer/StateContext";

const Payment = (props) => {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove = () => {
        setPaidFor(true)

    }

    if (paidFor) {
        props.AddReceipt()
        toast.success('Successfully!')

    }



    return (
        <>


            <Container >

                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({

                            purchase_units: [
                                {
                                    description: 'Payment',
                                    amount: {
                                        value: props.total

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
                        setError(err);
                        console.log("Error: ", err)
                    }

                    }
                />




            </Container>

        </>
    )
}
export default Payment;