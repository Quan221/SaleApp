import logo from './logo.svg';
import './App.css';
import Header from './component/layout/Header.js';
import React, { component , useReducer, createContext  } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import myReducer from './reducer/UseReducer';

import Login from './component/Login';
import Detail from './component/Detail';
import HomePage from './component/Home/HomePage';
import Item from './component/Item';
import Category from './component/Category';
import Register from './component/Register';
import RegisterShiper from './component/shipper';
import { StateContext } from './reducer/StateContext';


export const UserContext = createContext()


  
function App() {
  const [user, dispatch] = useReducer(myReducer)
  return (
   <BrowserRouter>
        <UserContext.Provider value={[user, dispatch] } >
          <StateContext>
            <Header/>
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
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/register' element={<Register/>}/>
            
        </Routes>
        </StateContext>
        </UserContext.Provider>
        
        


   </BrowserRouter>
  );
}

export default App;
