import logo from './logo.svg';
import './App.css';
import Header from './component/layout/Header.js';
import React, { component, useReducer, createContext } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import myReducer from './reducer/UseReducer';

import Login from './component/Login';
import Detail from './component/Detail';
import HomePage from './component/Home/HomePage';
import Category from './component/Category';
import Register from './component/Register';
import RegisterShiper from './component/shipper';
import { StateContext } from './reducer/StateContext';
import AddOrders from './component/AddOrders';
import OrderList from './component/Order';
import Shipper from './component/shipper';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



export const UserContext = createContext()



function App() {

  const [user, dispatch] = useReducer(myReducer)
  let btn = <>


  </>


  if (user != null) {
    btn = <>
      <Header />
    </>
  }
  return (
    <PayPalScriptProvider options={{
      "client-id": "ARPZplyh7bDL43TQSiqTF3Tf7ytbjE5vNvZsUzrPfLunZfbioCY2KNWrQIVzgI08NOvJW2xTNSi5GOhi"
    }}>
      <BrowserRouter>

        < UserContext.Provider value={[user, dispatch]} >
          <StateContext>
            {btn}
            {/* <RegisterShiper/> */}
            <Routes>

              {/* <Detail/> */}
              {/* <Login/> */}
              {/* <HomePage/> */}
              {/* <Item/> */}
              {/* <Category/> */}

              {/* shipper
        shiper-oder
        oder
        product */}
              <Route path="/" element={<Login />} />
              <Route path="/homepage" element={<HomePage />} />

              <Route path='/products/:productsId/' element={<Detail />} />
              {/* <Route path='/category' element={<Category/>}/> */}
              <Route path='/register' element={<Register />} />
              <Route path='/addorders' element={<AddOrders />} />
              <Route path='/order' element={<OrderList />} />
              <Route path='/shipper' element={<Shipper />} />



            </Routes>
          </StateContext>
        </UserContext.Provider>
      </BrowserRouter >
    </PayPalScriptProvider >
  );
}

export default App;
