import React,{useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Footer from '../components/footer';
function Register(){
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
  });
  const [isvalid,setIsValid]=useState({
    state:false,
    name:'',
    email:'',
    password:[],
    confirmpassword:'',
  });
  const [fillall,setFillAll]=useState("Please Fill all the Spaces");
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData(prevData=>({...prevData,[name]:value,}));
  };
  const handleSubmit=(e)=>{
  let data={name:formData.username,email:formData.email,password:formData.password};
    if(isvalid.state==true){
       fetch('http://localhost:8000/api/holders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).then(response=>{
        if(!response.ok){
          throw new Error('Network response was n ok');
        }
        return response.json()
      }).then(school=>{
        if(school.status===true){
          navigate('/auth/login');
        }
        else{
          alert(school.message);
        }
      }).catch(error=>{
        console.log(error);
      });
    }

  }

  useEffect(()=>{
    let {username,email,password,confirmpassword}=formData;
    let temp={state:false,name:'',email:'',confirmpassword:'',password:[]};
    setIsValid(temp);
    if([username].toString()&&[email].toString()&&[password].toString()&&[confirmpassword].toString()){
      setFillAll('');
    if([username]){
      temp.name='';
      const regex=/^[A-Za-z]{2,}$/;
      if(!regex.test([username])){
        temp.name='Name should be at least 2 characters long with no special characters or numbers.';
      }
    }
    if([email]){
      temp.email='';
      if(!isValidEmail([email])){
        temp.email='Invalid Email';
      }
    }
    if([password]){
      temp.password=[]
      if ([password].toString().length<8){
        temp.password.push('Password length should be at least 8.');
    }
    if(!/[A-Z]/.test([password])){
      temp.password.push('Password must contain at least one uppercase letter.');
    }
    if(!/[a-z]/.test([password])){
      temp.password.push('Password must contain at least one lowercase letter.');
    }
    if(!/\d/.test([password])){
      temp.password.push('Password must contain at least one digit.');
    }
    if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test([password])){
      temp.password.push('Password must contain at least one special character.');
    }
  }
    if([confirmpassword]){
      temp.confirmpassword='';
      if([password].toString()!==[confirmpassword].toString()){
        temp.confirmpassword='Password does not match Confirm Passord.'
      }
    }
  if((temp.name==='')&&(temp.email==='')&&(temp.confirmpassword==='')&&(temp.password.toString()==='')){
     temp.state=true;
      setIsValid(temp);
  }
  else{

    console.log('problem');//Sweet alert something went wrong
  }
  }
  else {
    setFillAll('Please Fill all the Spaces')

  }


  },[formData]);


  function isValidEmail(email){
    const emailRegularExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegularExp.test(email);
  }


  return(
    <>
    <div className="container">
    <center className="mt-5"> <h4><i>BookAHostel.com</i></h4></center>
    <div className="card mt-5">
      <div className="card-header text-center bg-primary text-white ">REGISTER ME</div>
      <div className="card-body">
         <div className="form-group">
         <label htmlFor="username">Username:</label>
         <input id="username" name="username" value={formData.username} onChange={handleChange} className="form-control" type="text" placeholder=" A name to be identified"/>
         <em className='text-danger'>{isvalid.name}</em>
         </div>
         <div className="form-group">
         <label htmlFor="username">Email Address:</label>
         <input id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" type="email" placeholder=" Your email adddress"/>
         <em className='text-danger'>{isvalid.email}</em>
         </div>
         <div className="form-group">
         <label htmlFor="password">Password:</label>
         <input id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" type="password" />
            <ul className='text-danger'>
           {isvalid.password.map((pass,index) =>
              (<li key={index}>{pass}</li>)
           )
           }
           </ul>
         </div>
         <div className="form-group">
         <label htmlFor="password">Confirm password:</label>
         <input id="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} className="form-control" type="password" />
         <em className='text-danger'>{isvalid.confirmpassword}</em>

         </div>
         <em className='text-danger'>{fillall}</em>

         <button className="btn btn-primary form-control" id="submit" onClick={handleSubmit}>REGISTER</button>
      </div>
      <div className="card-footer bg-white text-center">
      <Link to='/auth/login' className="text-success">Already have an account login!</Link>
      </div>
     </div>

     </div>
     <Footer/>
     </>
    )
}
export default Register;
