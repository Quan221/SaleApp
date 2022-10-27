import React, { useState, useContext } from 'react'
import { Form, Button, Container, Col, Figure, } from 'react-bootstrap'
import { PayPalButtons } from '@paypal/react-paypal-js'
import toast, { Toaster } from "react-hot-toast";




const Payment = (props) => {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove = (orderId) => {
        setPaidFor(true)
        props.AddOrder()
        toast.success('Successfully!')

    }

    if (paidFor) {


    }
    if (error) {
        alert(error);
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