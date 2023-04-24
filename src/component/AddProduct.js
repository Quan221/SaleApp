import { useRef, useState } from "react";
import { Button, Form, Container, FormSelect } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Apis, { authApi, endpoints } from "../configs/Api";
import axios from "axios";
import { useEffect } from "react";

export default function AddProduct() {
    const avatar = useRef()
    const [name, setName] = useState()
    const [description, setDescripstion] = useState()
    const [title, setTitle] = useState()
    const [categories, setCategories] = useState([])
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const nav = useNavigate()
    const goToLogin = (event) => {

        {
            nav(`/`)
        }

    }
    useEffect(() => {
        const loadCategories = async () => {
            const res2 = await authApi().get(endpoints['categories'])
            console.log(res2.data)
            setCategories(res2.data)
        }
        loadCategories()
    }, [])

    const add = (event) => {
        event.preventDefault()

        let registerProduct = async () => {
            const formData = new FormData()
            formData.append("Name", name)
            formData.append("Title", title)
            formData.append("Description", description)
            formData.append("Price", price)
            formData.append("CategoryId", category)
            formData.append("ImageFile", 0)
            formData.append("ImageFile", avatar.current.files[0])


            try {


                await authApi().post(endpoints['products'], formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }

                })


            } catch (err) {
                console.error(err)
            }
            // axios({
            //     method : 'POST',
            //     url: 'http://localhost:3000/register',
            //     data :formData

            // })

        }

        registerProduct()
    }


    return (
        <Container>
            <h1 className="text-center text-success mt-5">Thêm Sản Phẩm</h1>
            <Form onSubmit={add}>
                <RegisterForm id="Name" label=" Name"
                    type="text" value={name}
                    change={(event) => setName(event.target.value)} />

                <RegisterForm id="price" label="Price"
                    type="text" value={price}
                    change={(event) => setPrice(event.target.value)} />
                <RegisterForm id="titile" label="Title"
                    type="text" value={title}
                    change={(event) => setTitle(event.target.value)} />
                <RegisterForm id="Description" label="Description"
                    type="text" value={description}
                    change={(event) => setDescripstion(event.target.value)} />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Danh mục tin tức</Form.Label>
                    <FormSelect value={category} onChange={(event) => setCategory(event.target.value)}   >
                        <option disabled selected='true' >Chọn danh mục</option>
                        {categories.map(c => {
                            return <option value={c.id}>{c.name}</option>
                        })}

                    </FormSelect>
                </Form.Group>
                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" ref={avatar} className="form-control" />
                </Form.Group>

                <Button variant="success" type="submit" style={{ marginLeft: '450px', marginBottom: '40px' }} >
                    Đăng ký
                </Button>

            </Form>
        </Container>
    )
}

function RegisterForm(props) {
    return (
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type}
                value={props.value}
                onChange={props.change} />
        </Form.Group>
    )
}