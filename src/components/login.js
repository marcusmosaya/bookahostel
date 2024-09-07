import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Footer from '../components/footer';
import Sweet from '../components/sweet/sweet';
function Login(){
  const navigate=useNavigate();
  const [credentials,setCredentials]=useState({email:'',password:'',role:''});
  const [authenticated,setAuthenticated]=useState(false);
  const [state,setState]=useState(false);
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setCredentials(prevData=>({...prevData,[name]:value,}));
  };
  const authenticate=()=>{
    if (credentials.email&&credentials.password&&credentials.role) {
      console.log('success');

      //Logic to access the server via api see if authenticated if successful,navigate, else inform some wrong credentials

       if(credentials.role==='holder'){
         let data={email:credentials.email,password:credentials.password};
              fetch('http://localhost:8000/api/holders/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).then(response=>{
               if(!response.ok){
                 throw new Error('Network response was not ok');
               }
               return response.json()
             }).then(result=>{
               if(result.status===true){
                 localStorage.setItem('accessToken',result.token);
                 localStorage.setItem('holderId',result.holderId);

                 navigate('/dashboard');
               }
               else{
                 alert(result.message);
               }
             }).catch(error=>{
               console.log(error);
             });

       }
       else {
         navigate('/caretaker/dashboard');
       }
    }
    else{
      setState(true);
    }
  }
  function show(state) {
    if(state===true) return <Sweet setState={setState}/>;
  }

  return(
    <>
    <div className="container">
    <center className="mt-5"> <h4><i>BookAHostel.com</i></h4></center>
    <div className="card mt-5">
      <div className="card-header text-center bg-primary text-white ">WELCOME BACK</div>
      <div className="card-body">
         <div className="form-group">
         <label htmlFor="username">Username:</label>
         <input id="email" name="email" className="form-control" onChange={handleChange} value={credentials.email} type="email" placeholder=" Your email adddress"/>
         </div>
         <div className="form-group">
         <label htmlFor="password">password:</label>
         <input id="password" name="password" className="form-control" onChange={handleChange}  value={credentials.password} type="password" />
         </div>
         <div className="form-group">
           <select className="form-control"  name="role"  onChange={handleChange}  value={credentials.role}>
              <option disabled selected value='' >Select your role</option>
              <option value="holder">Holder</option>
              <option value="caretaker">Caretaker</option>
           </select>
         </div>
         <button className="btn btn-primary form-control" onClick={authenticate}>LOGIN</button>
      </div>
      <div className="card-footer bg-white text-center">
      <Link to='/auth/forgotpassword' className="text-danger">Forgot Password?</Link>
      <br/>
      <Link to='/auth/register' className="text-success">Register as an owner</Link>
      </div>
     </div>
        {show(state)}
     </div>
     <Footer/>
     </>
  )
}
export default Login;
