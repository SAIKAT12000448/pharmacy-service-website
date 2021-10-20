import React from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';

import useAuth from '../Hooks/useAuth';



import './Login.css';
const Login = () => {
  const{signInusingGoogle,signinusingGithub,emailvalue,handlepassword,handleRegister}=useAuth();
    
  const location = useLocation();
  const history =useHistory();
  const redirect_uri = location.state?.from || '/home'
  console.log('came from ',location.state?.from);

  const handleGoogleLogin=()=>{
      signInusingGoogle()
      .then(result=>{
      
        history.push(redirect_uri)
    })
  }



    return (
        <div className="container">
            <h1 className="text-center mt-2">Please LogIn!!</h1>
            <form onSubmit={handleRegister} className=" border p-5 me-auto ms-auto mt-5 form-container">
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold">Email</label>
    <div className="col-sm-10">
      <input onBlur={emailvalue} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlepassword}  type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
 <div className="text-center">
 <button type="submit" className="btn btn-primary mx-auto w-50">Sign in</button>
 </div>
</form>
    <p className="fs-5 text-center">or</p>
<div className="text-center mt-3 col-md-12 col-sm-12">
    <button onClick={handleGoogleLogin} className="signin fw-bold"><span className="fs-4 text-danger me-3"><i className="fab fa-google-plus-square"></i></span> <span className="fs-4">Google SignIn</span></button><br />
    <button onClick={signinusingGithub} className="signin fw-bold mt-3"><span className="fs-4 text-black me-3"><i className="fab fa-github"></i></span> <span className="fs-4">Github SignIn</span></button>
<br />
<div className="mt-4 ">
    <p>newUser?</p>
<h5 className='text-primary'>Create a Account</h5>
<Link to="/register"><button className="signin fw-bold">Register</button></Link>
</div>
    </div>

        </div>
    );
};

export default Login;