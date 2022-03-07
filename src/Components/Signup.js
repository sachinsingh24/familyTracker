/** @format */

import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='container d-flex justify-content-center my-5'>
      <div className='row my-2 mx-2 main'>
        <div className='col-md-4 col-12 mycol'>
          <img
            src='https://i.imgur.com/cEmbD0i.jpg'
            width='100%'
            height='100%'
            alt='family'
          />{' '}
        </div>
        <div className='col-md-8 col-12 xcol'>
          <h2 className='title pt-5 pb-3'>Sign up</h2>
          <form className='myform'>
            <div className='row rone'>
              <div className='form-group col-md-6 fone py-3'>
                {' '}
                <input
                  type='text'
                  className='form-control'
                  placeholder='First name'
                />{' '}
              </div>
              <div className='form-group col-md-6 ftwo py-3'>
                {' '}
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                />{' '}
              </div>
            </div>
            <div className='row rtwo'>
              <div className='form-group col-md-6 ffour py-3'>
                {' '}
                <input
                  type='email'
                  className='form-control lm'
                  placeholder='knwst@gmail.com'
                />{' '}
              </div>
            </div>
            <div className='row rthree'>
              <div className='form-group col-md-6 ffive py-3'>
                {' '}
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                />{' '}
              </div>
              <div className='form-group col-md-6 fsix py-3'>
                {' '}
                <input
                  type='password'
                  className='form-control'
                  placeholder='Confirm Password'
                />{' '}
              </div>
            </div>
            <div className='row rfour'>
              <div className='form-group col-md-6 fseven py-3'>
                {' '}
                <button type='submit' className='btn btn-primary'>
                  <span>Create account</span>
                </button>{' '}
              </div>
              <div className='form-group col-md-6 feight py-3'>
                <p className='text-muted'>
                  Already have an account?
                  <Link to='/login' className='nav-link'>
                    Signin
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
