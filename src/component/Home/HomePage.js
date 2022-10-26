import React, { useContext } from "react"
import { Form, Button, Container, Col, Figure, Image, } from 'react-bootstrap'
import Banners from '../../image/banner.jpg'
import { Link } from "react-router-dom"
import ProductItem from "../ProductItem.js"
import { useEffect } from "react"
import Apis, { authApi, endpoints } from "../../configs/Api.js"
import { useState } from "react"
import { UserContext } from "../../App"
import axios from "axios"
const HomePage = () => {
    const [user, dispatch] = useContext(UserContext)
    const [products, setProducts] = useState([])
    const [next, setNext] = useState()
    const [pre, setPre] = useState()
    useEffect(() => {
        const loadProducts = async () => {


            const res = await authApi().get(endpoints['products'])
            setProducts(res.data.results)
            setNext(res.data.next)
            setPre(res.data.pre)
            console.log(res.data)

        }

        loadProducts()
    }, [])

    const prevPage = async () => {
        await axios.get(pre)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.results)
                setNext(res.data.next)
                setPre(res.data.previous)


            })
    }

    const nextPage = async () => {
        await axios.get(next)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.results)
                setNext(res.data.next)
                setPre(res.data.previous)


            })

    }


    let content = <>

        <h1 className="text-aglin text-center" >Product</h1>
        <Container>
            <Button
                className="success"
                onClick={() => prevPage()}


            >
                Prev
            </Button>
            <Button
                className="success"
                onClick={() => nextPage()}
            >
                Next
            </Button>

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
                                <Button variant="success" type="submit" className="btn-banner ">
                                    Order
                                </Button>
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
// const item = () =>{


//     return(

//         pass

//     )
// }