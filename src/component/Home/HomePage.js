import React, { useContext } from "react"
import { Form, Button, Container, Col, Figure, Image, } from 'react-bootstrap'
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
    const [next, setNext] = useState()
    const [pre, setPre] = useState()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const loadProducts = async () => {


            const res = await authApi().get(endpoints['products'])
            setProducts(res.data.results)
            setNext(res.data.next)
            setPre(res.data.pre)
            console.log(res.data)

        }
        const loadCategories = async () => {
            const res2 = await authApi().get(endpoints['categories'])
            console.log(res2.data)
            setCategories(res2.data)
        }

        loadProducts()
        loadCategories()
    }, [])

    const prevPage = async () => {
        if (pre) {
            await axios.get(pre)
                .then((res) => {
                    console.log(res.data);
                    setProducts(res.data.results)
                    setNext(res.data.next)
                    setPre(res.data.previous)


                })

        }

    }

    const nextPage = async () => {
        if (next) {
            await axios.get(next)
                .then((res) => {
                    console.log(res.data);
                    setProducts(res.data.results)
                    setNext(res.data.next)
                    setPre(res.data.previous)


                })


        }

    }
    const getCategories = async (id) => {
        let res3 = await authApi().get((endpoints['getProductByCate'](id)))
        setProducts(res3.data)

    }


    let content = <>

        <h1 className="text-aglin text-center" >Product</h1>
        <Container>
            <div style={{ display: 'flex' }} >
                {categories.map(c => {
                    return (<Button style={{ width: '150px', borderRadius: '20px', marginLeft: '10px' }} onClick={() => getCategories(c.id)} >{c.name}</Button>)
                })}


            </div>
        </Container>
        <Container >
            <div style={{ textAlign: 'center' }} >
                <AiOutlineDoubleLeft onClick={() => prevPage()} style={{ cursor: 'pointer' }} >

                </AiOutlineDoubleLeft>


                <AiOutlineDoubleRight onClick={() => nextPage()} style={{ cursor: 'pointer' }} >

                </AiOutlineDoubleRight>
            </div>

        </Container>

        <div className="item-container"  >
            {products.map(c => {
                return <ProductItem id={c.id} image={c['image']} name={c['name']} price={c.price} />
            })}

        </div></>


    if (user != null && user.role == "Shipper") {
        content = <></>
    }

    return (
        <>
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
            {content}

        </>
    )

}
export default HomePage;
function getProduct(props) {


}