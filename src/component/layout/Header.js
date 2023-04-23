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
import { useStateContext } from '../../reducer/StateContext';
import CartItem from '../CartItem';
function Header() {
  const [user, dispatch] = useContext(UserContext)
  const [users, setUsers] = useState()
  const { showCart, setShowCart, totalQuantities } = useStateContext();


  let btn = <>

    <button className='btn-login'><Link to="/" className='nav-link' >Log in</Link> </button>

  </>
  let btn2 = <>
  </>

  const logout = (evt) => {
    dispatch({ "type": "logout" })
    localStorage.clear()
  }
  if (user != null) {
    btn = <>
      <div style={{ marginTop: '8px' }} > {user.username}</div>
      <Link to='/' onClick={logout} > <button className='btn-logout'> Đăng xuất</button></Link>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <CartItem />}
    </>
    btn2 = <>
      <Link to='/homepage' className='nav-link' >Trang chủ</Link>
      <Link to='/order' className='nav-link' >Đơn hàng của tôi</Link>
      <Link to='/addorders' className='nav-link' >Đặt hàng</Link>

    </>

    if (user.roles[0] == "Admin") {

      btn = <>
        <div style={{ marginTop: '8px' }} > {user.username}</div>
        <Link to='/' onClick={logout} > <button className='btn-logout'  > Đăng xuất</button></Link>
        </>
        btn2=<>
        <Link to='add-product' className='nav-link' > Thêm Sản Phẩm </Link>
        </>
    }
    

      
    //   btn2 = <>
    //     <Link to='/homepage' className='nav-link' >Trang chủ</Link>
    //     <Link to='/order' className='nav-link' >Đơn hàng của tôi</Link>
    //     <Link to='/addorders' className='nav-link' >Đặt hàng</Link>

    //   </>
    // }
    // else {
    //   btn = <>
    //     <div style={{ marginTop: '8px' }} > {user.name}</div>
    //     <Link to='/' onClick={logout} > <button className='btn-logout'  > Đăng xuất</button></Link>

    //   </>
    //   btn2 = <>
    //     <Link to='/shipper' className='nav-link' >Order List</Link>
    //     <Link to='/homepage' className='nav-link' >Home</Link>
    //   </>

    // }
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
        <Navbar.Brand href="#home">SIÊU THỊ ĐIỆN MÁY OU-MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {btn2}


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



          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;