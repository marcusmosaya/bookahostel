import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../components/footer'
function ForgotPassword(){
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const handleChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleSubmit=()=>{
    console.log(email);
    if(!email){
       alert("Please enter your email address");
    }
    else {
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert("This is not a valid email address\n Please enter a valid email address.");
      }
      else{
        navigate('/auth/verify');
      }
    }

  }
  return(
    <>
    <div className="container">
    <center className="mt-5"> <h4><i>BookAHostel.com</i></h4></center>
    <div className="card mt-5">
      <div className="card-header text-center bg-primary text-white ">Forgot Password?</div>
      <div className="card-body">
         <div className="form-group">
         <label htmlFor="email">Enter your email address to receive an Code:</label>
         <input id="email" name="email" className="form-control" value={email} onChange={handleChange} type="email" placeholder=" Your email adddress"/>
         </div>
         <button className="btn btn-primary form-control" onClick={handleSubmit}>SEND CODE</button>
      </div>
     </div>

     </div>
     <Footer/>
     </>
  )
}
export default ForgotPassword;
