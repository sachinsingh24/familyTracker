/** @format */

import React from 'react';
import Login from './Components/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup.js';
import User from './Components/User.js';
import Head from './Components/Head.js';
const App = () => {
  return (
    <Router>
      <div className='container'>
        <br />
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<Signup />} />
          <Route path='/Head' element={<Head />} />
          {/* <Route path='/create' element={<CreatePost />} />
          <Route path='/users' element={<CreateUser />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
