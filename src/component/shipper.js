import { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Apis, { authApi, endpoints } from "../configs/Api";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function Shipper() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const loadOrders = async () => {


      const res = await authApi().get(endpoints['list-orders'])
      setOrders(res.data)
      console.log(res.data)
      console.log(orders)
    }

    loadOrders()
  }, [orders])



  return (
    <Container>
      <Table striped bordered hover size="sm" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th colSpan={5} style={{ textAlign: 'center' }} >Danh sách các đơn hàng: </th>

          </tr>
        </thead>
        {orders.map(c => {

          return <Desk id={c.id} orderid={c.id} address={c.ship_address} status={c.status} />
        })

        }
      </Table>
      <Toaster />
    </Container >
  )





}
function Desk(props) {
  const nav = useNavigate()

  const changeStatus = async (event) => {


    event.preventDefault()
    let res = await authApi().post((endpoints['changeStatus'])(props.orderid), {
    })
    { nav(`/shipper`) }
    toast.success('Successfully!')

  }
  if (props.status == "ToReceive")
    return (

      <tbody>

        <tr>
          <td>{props.id}</td>
          <td colSpan={3}>{props.address}</td>
          <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} onClick={changeStatus} >Xac Nhan</Button> </td>
        </tr>

      </tbody>

    )
}