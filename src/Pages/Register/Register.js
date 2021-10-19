import React from 'react';
import { Link } from 'react-router-dom';


import useAuth from '../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const{handleRegister,namevalue,emailvalue,handlepassword,error,islogin,handlecheck}=useAuth()
    return (
        <div className="container">
            <h1 className="mt-3 text-center">Please {islogin?'Log In':'Register'}!!</h1>
            <form onSubmit={handleRegister} className="container mt-5 form-container">
          {!islogin &&  <div className="row mb-3">
    <label htmlFor="name" className="col-sm-2 col-form-label fw-bold">Name</label>
    <div className="col-sm-10">
      <input onBlur={namevalue} type="name" className="form-control" id="name"placeholder="enter your name"/>
    </div>
  </div>}
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold">Email</label>
    <div className="col-sm-10">
      <input onBlur={emailvalue} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlepassword} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={handlecheck} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Already registered?
        </label>
      </div>
    </div>
  </div>
  <div className="text-danger fw-bold">{error}</div>
  <div className="text-center">
  <button type="submit" className="btn btn-primary fw-bold">{islogin?'Log in':'Submit'}</button>
  </div>
</form>
<div className="text-center mt-3 fw-bolder fs-5">
    <p>Already have an account?<span><Link to='/login'> LogIn</Link></span></p>
</div>
        </div>
    );
};

export default Register;