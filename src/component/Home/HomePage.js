import React from "react"
import { Form, Button, Container, Col, Figure, Image,  } from 'react-bootstrap'
import Item from "../Item.js"
import Banners from '../../image/banner.jpg'
import { Link } from "react-router-dom"
import ProductItem from "../ProductItem.js"
const HomePage = () => {




    return (
        <>
            {/* <Figure>
                <Figure.Image  src={require=('banner.png' )} />
            </Figure> */}
            
            <div className="banner">
            <div className="mage" ><Image width={856} height={577} src= {Banners} /></div>
            <div className="banner-left" >
                <div className="banner-group">
                        <h1 className="h1-banner" >Your satisfaction is our pleasure</h1>
                        <h2 className="h2-banner">2hr delivery promise</h2>
                        <Form  >
                        <Link to='/' className="nav-link">
                        <Button variant="success" type="submit" className="btn-banner ">
                        Oder
                        </Button>
                        </Link>
                   
                        </Form>
                </div>
                
                
            </div>
            </div>
            <h1 className="text-aglin text-center" >Product</h1>
            <div className="item-container"  >
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/><ProductItem/><ProductItem/><ProductItem/><ProductItem/>
            </div>
        </>
    )
      
}
export default HomePage ;
// const item = () =>{


//     return(

//         pass

//     )
// }