import { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Apis, { authApi, endpoints } from "../configs/Api";
import React from "react";
export default function Shipper() {




  return (
    <Container>
      <Table striped bordered hover size="sm" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th colSpan={5} style={{ textAlign: 'center' }} >Danh Sach Don Hang</th>

          </tr>
        </thead>
        <tbody>

          <tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} >Primary</Button> </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} >Primary</Button> </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} >Primary</Button> </td>
          </tr><tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} >Primary</Button> </td>
          </tr><tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} >Primary</Button> </td>
          </tr><tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td><Button size="sm" variant="success " style={{ width: "100px", margin: '0', }} disabled>Primary</Button> </td>
          </tr>
        </tbody>
      </Table>

    </Container >
  )





}