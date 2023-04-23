import { useRef, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Apis, { endpoints } from "../configs/Api";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const avatar = useRef()
    const nav = useNavigate()
    const goToLogin = (event) => {

        {
            nav(`/`)
        }

    }

    const register = (event) => {
        event.preventDefault()

        let registerUser = async () => {
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
              }

            try {
                console.log(data)

                await Apis.post(endpoints['register'], data, {
                    headers: {
                        "Content-Type": "application/json"
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

        if (password !== null && password === confirmPassword) {
            registerUser()
            goToLogin()

        }
    }


    return (
        <Container>
            <h1 className="text-center text-success mt-5">Đăng ký người dùng</h1>
            <Form onSubmit={register}>
                <RegisterForm id="firstName" label="First Name"
                    type="text" value={firstName}
                    change={(event) => setFirstName(event.target.value)} />
                <RegisterForm id="lastName" label="Last Name"
                    type="text" value={lastName}
                    change={(event) => setLastName(event.target.value)} />
                <RegisterForm id="email" label="Email"
                    type="email" value={email}
                    change={(event) => setEmail(event.target.value)} />
                <RegisterForm id="password" label="Password"
                    type="password" value={password}
                    change={(event) => setPassword(event.target.value)} />
                <RegisterForm id="confirm" label="Confirm Password"
                    type="password" value={confirmPassword}
                    change={(event) => setConfirmPassword(event.target.value)} />
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