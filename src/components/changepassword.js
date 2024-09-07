import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Footer from '../components/footer';
function ChangePassword(){
  const navigate=useNavigate();
  const [data,setData]=useState({oldPassword:'',password:'',confirmPassword:''});
  let temp={password:[],confirmPassword:''}
  const [formError,setFormError]=useState({password:[],confirmPassword:''})
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{
    if(!data.oldPassword||!data.password||!data.confirmPassword){
       alert("Please Fill all the spaces");
    }
    else {
      if(data.password){
        temp.password=[]
        if (data.password.toString().length<8){
          temp.password.push('Password length should be at least 8.');
      }
      if(!/[A-Z]/.test(data.password)){
        temp.password.push('Password must contain at least one uppercase letter.');
      }
      if(!/[a-z]/.test(data.password)){
        temp.password.push('Password must contain at least one lowercase letter.');
      }
      if(!/\d/.test(data.password)){
        temp.password.push('Password must contain at least one digit.');
      }
      if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(data.password)){
        temp.password.push('Password must contain at least one special character.');
      }
    }
      if(data.confirmPassword){
        temp.confirmPassword='';
        if(data.password.toString()!==data.confirmPassword.toString()){
          temp.confirmPassword='Password does not match Confirm Passord.'
        }
      }
      setFormError(temp);
      if(!temp.password||!temp.confirmPassword){
         //LOgic to make sure that the old pass word is actually the old password
        setTimeout(()=>{
          navigate('/auth/verify');

        },1500)
      }
      console.log(temp);
    }

  }
  return(
    <>
    <div className="container">
    <center className="mt-5"> <h4><i>BookAHostel.com</i></h4></center>

    <div className="card mt-5">
      <div className="card-header text-center bg-primary text-white ">Change Password?</div>
      <div className="card-body">
         <div className="form-group">
            <label htmlFor="oldPassword">Enter your current password:</label>
            <input id="oldPassword"  name='oldPassword' onChange={handleChange}  className="form-control" type="password"/>
         </div>
         <div className="form-group">
         <label htmlFor="password">Enter your new password:</label>
         <input id="password"  name='password' onChange={handleChange}  className="form-control" type="password"/>
         <ul style={{listStyleType:'square'}}>
       {
         (formError.password).map(error=>( <li> <em className="text-danger">{error}</em></li>))

       }
        </ul>
         </div>
         <div className="form-group">
         <label htmlFor="confirmPassword">Confirm new password:</label>
         <input id="confirmPassword" name='confirmPassword' onChange={handleChange} className="form-control" type="password"/>
         <em className="text-danger">{formError.confirmPassword}</em>


         </div>
         <button className="btn btn-primary form-control" onClick={handleSubmit}>Change Password</button>
      </div>
      <div className="card-footer text-center bg-white">
        <Link   to="/auth/forgotpassword"className="text-success" >Forgot Password ?</Link>
      </div>
     </div>

     </div>
     <Footer/>
     </>
  )
}
export default ChangePassword;
