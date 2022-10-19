import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Apis, { authApi, endpoints } from "../configs/Api";
import React from "react";
export default function RegisterShiper(){
    const [CMND,setCMND] = useState([])
    
    
    const addShipper = async (event) =>{

        event.preventDefault()
        const res = await authApi().post(endpoints['register-shipper'],{
            'identity_number': CMND,
        })
        console.log(res.data)
        
        setCMND('')
    }
    
    


    return(
        <>
        <h1 className="text-center text-danger">Dang Ky Shiper</h1>
        <Form onSubmit={addShipper}>
        <Form.Group className="mb-3" controlId="CMND">
        <Form.Label>CMND</Form.Label>
        <Form.Control type="text" 
                      value={CMND}
                      onChange={(event) =>{ setCMND(event.target.value )}}/>
        </Form.Group>
            <Button variant="primary" type="submit">
                Dang ky
            </Button>
        </Form>
        </>
    )





}