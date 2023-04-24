import React, { useContext } from "react"
import { Form, Button, Container, Col, Figure, Image, Alert, Badge, } from 'react-bootstrap'
import Banners from '../../image/banner.jpg'
import { Link, useSearchParams } from "react-router-dom"
import ProductItem from "../ProductItem.js"
import { useEffect } from "react"
import Apis, { authApi, endpoints } from "../../configs/Api.js"
import { useState } from "react"
import { UserContext } from "../../App"
import axios from "axios"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"
const HomePage = () => {
    const [user, dispatch] = useContext(UserContext)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [cateId, setCateId] = useState()
    const [search, setSearch] = useState('')

    useEffect(() => {
        const loadProducts = async () => {
            const res = await authApi().get(endpoints['products'], { params: { cateId, search } })
            setProducts(res.data)
        }
        loadProducts()
    }, [cateId, search])


    useEffect(() => {
        const loadCategories = async () => {
            const res2 = await authApi().get(endpoints['categories'])
            console.log(res2.data)
            setCategories(res2.data)
        }
        loadCategories()
    }, [])



    const getCategories = async (id) => {
        setCateId(id)
    }

    const handleSearchInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSearchButtonClick = () => {
        setSearch(search);
    }
    let content = <>
        <h1 bg="warning" className="text-center mt-5 .text-dark">Danh sách sản phẩm</h1>
        <Container>
            <div style={{ display: 'flex' }} >
                {categories && categories.map(c => {
                    return (<Button style={{ width: '150px', borderRadius: '20px', marginLeft: '10px' }} onClick={() => getCategories(c.id)} >{c.name}</Button>)
                })}
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Nhập tên sản phẩm" value={search} onChange={handleSearchInputChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleSearchButtonClick}>Tìm kiếm</Button>
            </Form>
        </Container>
        <Container >
            <div style={{ textAlign: 'center' }} >
                <AiOutlineDoubleLeft style={{ cursor: 'pointer' }} >

                </AiOutlineDoubleLeft>


                <AiOutlineDoubleRight style={{ cursor: 'pointer' }} >

                </AiOutlineDoubleRight>
            </div>

        </Container>

        <div className="item-container">
            {products && products.map(c => {
                return <ProductItem id={c.id} image={c['imageUrl']} name={c['name']} price={c.price} />
            })}

        </div></>
    let banner = <>
        <div className="banner">
            <div className="mage" ><Image width={856} height={577} src={Banners} /></div>
            <div className="banner-left" >
                <div className="banner-group">
                    <h1 className="h1-banner" >Your satisfaction is our pleasure</h1>
                    <h2 className="h2-banner">2hr delivery promise</h2>
                    <Form  >
                        <Link to='/' className="nav-link">

                        </Link>

                    </Form>
                </div>


            </div>
        </div>
    </>


    if (user != null && user.roles[0] == "Admin") {
        content = <>

            <h1 style={{ textAlign: "center" }} >WELCOME BACK SIR</h1>
        </>
        banner = <></>
    }

    return (
        <>
            {banner}
            {content}

        </>
    )

}
export default HomePage;
