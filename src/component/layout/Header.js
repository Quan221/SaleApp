import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App"
import { authApi, endpoints } from '../../configs/Api';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineShopping } from 'react-icons/ai';
import {useStateContext} from '../../reducer/StateContext';
import CartItem from '../CartItem';
function Header() {
  const [user, dispatch] = useContext(UserContext)
  const [users,setUsers]= useState()
  const { showCart, setShowCart, totalQuantities } = useStateContext();


  // useEffect(()=>{
  //   const loadUsers= async()=>{
  //       const cus = await authApi().get(endpoints['current-user'])
  //           setUsers(cus.data)
  //           console.log(cus)

  //   }
  //       loadUsers()
        

  //               },[])

        let btn=<>

              <button className='btn-login'><Link to="/login" className='nav-link' >Log in</Link> </button>
              
            </>

          const logout = (evt) => {
            dispatch({"type": "logout"})
          }

            if (user != null)
             { 
              btn = <>
                      {user.username}
                     <Link to='/login' onClick={logout} > <button className='btn-logout'  > Log out</button></Link>
                    </>
             }

             const HoverText = styled.p`
             color: #000;
             :hover {
               color: #ed1212;
               
             }
           `
          
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Quang&Quan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link' >Home</Link>
            <Nav.Link href="#link">Link</Nav.Link>
           
          </Nav> 
            
          <Nav>
           {btn}

            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log in
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
           <AiOutlineShopping />
           <span className="cart-item-qty">{totalQuantities}</span>
           </button>

           {showCart && <CartItem/>}
          
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;