import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Test from "../image/t_m_18.png";
import Table from 'react-bootstrap/Table';

const Category = (props) => {


    return (


        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Tồng tiền</th>
                        <th>Hình ảnh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.quantity}</td>
                        <td>{props.price}</td>
                        <td><img style={{
                            width: '100px',
                            height: '50px',
                            verticalAlign: 'middle',
                        }} src={props.image} alt="Avatar" class="avatar" />
                        </td>
                    </tr>

                </tbody>

            </Table>
        </Container>



    )
}
export default Category;