import React, { useState, useContext } from 'react'
import { Form, Button, Container, Col, Figure,  } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import Apis, {endpoints, authApi} from '../configs/Api.js'
import cookie from 'react-cookies'
import "../App.css"
import "../image/Loginscreen.jpg"



const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, dispatch] = useContext(UserContext)

    const login = async (evt) => {
        evt.preventDefault() 
         
        const res = await Apis.post(endpoints['login'], {
            'username': username,
            'password': password,
            'client_id': 'O9x3mwVEWHyXxDnseZh4SZw1mEGtTosyr5cItGSW',
            'client_secret': 'VGltontOQwJ8Aizu4qmRYFfWMvTSHCWjUAZUTUHhD8EYSt3n50kO9phSZS0DCB54j39lG2DDZh6lJbCKkS5bj1ZQl6NTDoyh67KBL1IDL57x1qTwdZaZ2YGXByIeDMSD',
            'grant_type': 'password'
        })

        // console.info(res.data)
        // cookies.save('token', res.data.access_token)
        cookie.remove('userToken', { path: '/' })
        console.log(cookie.load('userToken'))
        cookie.save('userToken', res.data.access_token, { path: '/' })
       
        
        const user = await authApi().get(endpoints['current-user'])
        console.info(user.data)
        dispatch({
            'type': 'login',
            'payload': user.data
        })
    }


    if (user != null)
        return <Navigate to="/" />
    return(
        <>
        {/* <Figure>
                <Figure.Image 
                  width={171}
                  height={180}
                  src="../image/Loginscreen.jpg"/>
        </Figure> */}
        {/* <Container className='bg_image' ></Container> */}
        <div className='bg_image'/>
        <div  className="sign-up-container form form-container">
        <Container >
        
        
            <h1 className="text-center text-success">Log in</h1>
            <Col >
            <Form   onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Username</Form.Label> */}
                    <Form.Control type="text" 
                        value={username} 
                        onChange={(evt) => setUsername(evt.target.value)}
                        placeholder="Nhap username" 
                        required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" 
                            value={password} 
                            onChange={(evt) => setPassword(evt.target.value)}
                            placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit" className="button ">
                   <Link to="/" className='nav-link' >Login</Link>
                </Button>
               <Link to="/register" className=' btn-register'  variant="success" >Dang ky</Link>
            </Form>
            </Col>
        </Container>
        </div>
       
        </>
    )
}
export default Login;