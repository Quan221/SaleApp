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
    const nav = useNavigate()
    const goToAdmin = (event) => {

        {
            nav(`/admin`)
        }

    }




    useEffect(() => {
        const loadProducts = async () => {
            let res = await Api.get((endpoints['products-detail'](productsId)))
            setProducts(res.data)
            setName(res.data.name)
            setDescripstion(res.data.description)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setCategory(res.data.category)


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



    const xoa = (event) => {
        event.preventDefault()

        let deleteProducts = async () => {



            try {


                await authApi().delete((endpoints['products-detail'](productsId)))



            } catch (err) {
                console.error(err)
            }
            // axios({
            //     method : 'POST',
            //     url: 'http://localhost:3000/register',
            //     data :formData

            // })
            goToAdmin()

        }

        deleteProducts()

    }
    const sua = (event) => {
        event.preventDefault()
        let changeProduct = async () => {
            const formData = new FormData()
            formData.append("Name", name)
            formData.append("Title", title)
            formData.append("Description", description)
            formData.append("Price", price)
            formData.append("CategoryId", category)
            formData.append("ImageFile", avatar.current.files[0])
            try {


                await authApi().patch((endpoints['products-detail'](productsId)), formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }

                })



            } catch (err) {
                console.error(err)
            }
            goToAdmin()
        }
        changeProduct()


    }

    return (

        <>
            <Container>
                <h3 class="mt-3 text-center text-primary text-uppercase"></h3>
                <div class="col-12 col-xl-auto mb-3">

                    <Link to="/admin" > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left me-1"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Trở về </Link>
                </div>

                <Form onSubmit={sua} >


                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name<span class="text-danger">&#32; &#42; </span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Price<span class="text-danger">&#32; &#42; </span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={price} defaultValue={products.price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
                        <Form.Label>Description<span class="text-danger">&#32; &#42; </span></Form.Label>
                        <Form.Control type="text" controlId='title'

                            value={description} defaultValue={products.description}
                            onChange={(event) => setDescripstion(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput13">
                        <Form.Label>Title<span class="text-danger">&#32; &#42; </span></Form.Label>
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


                    <div style={{ display: 'flex' }}>
                        <Button variant="success" type="submit" style={{ marginLeft: '300px', marginBottom: '40px' }} >
                            Thay Đổi
                        </Button>
                        <Button variant="danger" style={{ marginLeft: '30px', marginBottom: '40px' }} onClick={xoa} >
                            Xóa
                        </Button>

                    </div>


                </Form>
                <div style={{ display: 'flex' }}>

                </div>


            </Container>
        </>

    )



}


export default Update

