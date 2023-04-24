import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, FormSelect } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Api, { authApi, endpoints } from "../configs/Api";
import Form from 'react-bootstrap/Form';


const Update = () => {

    const { productsId } = useParams()
    const [products, setProducts] = useState([])
    const avatar = useRef()
    const [name, setName] = useState()
    const [description, setDescripstion] = useState()
    const [title, setTitle] = useState()
    const [categories, setCategories] = useState([])
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()




    useEffect(() => {
        const loadProducts = async () => {
            let res = await Api.get((endpoints['products-detail'](productsId)))
            setProducts(res.data)


        }
        loadProducts()
    }, [])


    useEffect(() => {
        const loadCategories = async () => {
            const res2 = await authApi().get(endpoints['categories'])
            console.log(res2.data)
            setCategories(res2.data)
        }
        loadCategories()
    }, [])
    console.log(products.name)

    return (

        <>
            <Container>
                <h1 className="text-center text-success mt-5">Đăng ký người dùng</h1>
                <Form >


                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name<span class="text-danger">&#32;&#42;</span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={name} defaultValue={products.name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Price<span class="text-danger">&#32;&#42;</span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={price} defaultValue={products.price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
                        <Form.Label>Description<span class="text-danger">&#32;&#42;</span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={description} defaultValue={products.description}
                            onChange={(event) => setDescripstion(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput13">
                        <Form.Label>Title<span class="text-danger">&#32;&#42;</span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={title} defaultValue={products.title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </Form.Group>




                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
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
        </>

    )



}


export default Update

