import React from 'react';
import useAuth from '../Hooks/useAuth';
import Feedback from './Feedback';
const Contact = () => {
    const{user}=useAuth()
    return (
        <div className="container">
            <h1 className="text-center my-4">Solve your problem by submit this form</h1>
        <div className="d-lg-flex p-5">
            <div className="me-5 mb-4">
                
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="name" class="form-control" id="inputEmail4"placeholder={user.displayName}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Road no</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Current Address</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Union</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputCity"placeholder={user.email}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Dhaka</option>
      <option>cumilla</option>
      <option>chattgram</option>
      <option>tripora</option>
      <option>barishal</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-6">
    <label for="text" class="form-label">Your problem description</label>
    <textarea id="text" name=""cols="30" rows="5"></textarea>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
            </div>


<div>
    <img className="img-fluid" width="2000px"src="https://www.kindpng.com/picc/m/741-7414210_vector-contact-us-image-png-transparent-png.png" alt="" />
</div>

        </div>

<div>
  <h1 className="text-center text-danger my-4">feedback</h1>
  <Feedback></Feedback>
</div>


        </div>
    );
};

export default Contact;