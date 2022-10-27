import React, { useState, useContext } from 'react'
import { Form, Button, Container, Col, Figure, } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import Apis, { endpoints, authApi } from '../configs/Api.js'
import cookies from 'react-cookies'
import "../App.css"
import "../image/Loginscreen.jpg"
import axios from 'axios'



const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, dispatch] = useContext(UserContext)

    const login = async (evt) => {
        evt.preventDefault()


        const formData = new FormData()
        formData.append("password", password)
        formData.append("username", username)
        formData.append("client_id", 'EB3ubv5GItpeACkQQQ1jMBbHGVtqm2s38CYo3oH5')
        formData.append("client_secret", 'bwctO3YEe6YkdvCWnurGqpVIlgvT0jJnidNqI8apIVhzrZumL6mmrT7tsw3v7kgeoiUybcPX3feb5IY1VuNJTGTevWJaEuUDciGtcjDQ1Y4RTe7veTHLJxHMmwPaH3MZ')
        formData.append("grant_type", 'password')
        const res = await Apis.post(endpoints['login'], formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }

        })

        // console.info(res.data)
        // cookies.save('userToken', res.data.access_token)
        // cookie.remove('userToken', { path: '/' })
        // console.log(cookie.load('userToken'))
        // cookie.save('userToken', res.data.access_token, { path: '/' })
        localStorage.setItem('userToken', res.data.access_token)



        const user = await authApi().get(endpoints['current-user'])
        console.info(user.data)
        dispatch({
            'type': 'login',
            'payload': user.data
        })
    }


    if (user != null)
        return <Navigate to="/homepage" />
    return (
        <>
            {/* <Figure>
                <Figure.Image 
                  width={171}
                  height={180}
                  src="../image/Loginscreen.jpg"/>
        </Figure> */}
            {/* <Container className='bg_image' ></Container> */}
            <div className='bg_image' />
            <div className="sign-up-container form form-container">
                <Container >


                    <h1 className="text-center text-success">Log in</h1>
                    <Col >
                        <Form onSubmit={login}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Username</Form.Label> */}
                                <Form.Control type="text"
                                    value={username}
                                    onChange={(evt) => setUsername(evt.target.value)}
                                    placeholder="Nhap username"
                                    required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password"
                                    value={password}
                                    onChange={(evt) => setPassword(evt.target.value)}
                                    placeholder="Password" required />
                            </Form.Group>
                            <Button variant="success" type="submit" className="button ">
                                Login
                            </Button>
                            <Link to="/register" className=' btn-register' variant="success" >Dang ky</Link>
                        </Form>
                    </Col>
                </Container>
            </div>

        </>
    )
}
export default Login;