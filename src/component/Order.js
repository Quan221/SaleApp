import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import { authApi, endpoints } from "../configs/Api"
export default function OrderList() {

    const [myOrder, setMyOrders] = useState([])
    useEffect(() => {
        const loadOrders = async () => {

            const res = await authApi().get(endpoints['my-orders'])
            setMyOrders(res.data)

            console.log(res.data)
            console.log(res.item)
            console.log(myOrder)

        }

        loadOrders()

    }, [])



    return (

        <>
            <h1 style={{ verticalAlign: 'text-top', textAlign: 'center' }} > Đơn hàng của tôi </h1>
            {/* {myOrder.map(h => {
                return (
                    <h1>{h.item.id}</h1>
                )
            })} */}
            {myOrder.map(c => {
                let a = 0
                return (
                    <Container>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={3} style={{ textAlign: "center" }}  >Trạng thái đơn hàng: {c.status} </th>
                                    {/* <th>{c.status}</th> */}
                                </tr>
                            </thead>
                            {c.item.map(d => {
                                {
                                    a += d.sum
                                }
                                return (
                                    <tbody>

                                        <tr>

                                            <td ><span>{d.product.name} </span></td>
                                            <td> x {d.quantity}</td>

                                            <td>{d.sum} VNĐ</td>

                                        </tr>



                                    </tbody>

                                )

                            })}
                            <tbody>
                                <tr>
                                    <td colSpan={2}>total</td>
                                    <td>

                                        <td>{a} VNĐ </td>
                                    </td>


                                </tr>


                            </tbody>

                        </Table>
                    </Container>
                )
            })
            }
        </>

    )

}