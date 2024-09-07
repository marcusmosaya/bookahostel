import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';

function CaretakerRegister(){
  let {hostelId}=useParams();
  const [formData,setFormData]=useState({hostelId:hostelId,fname:'',sname:'',email:'',Nid:''});
  const [problems,setProblems]=useState({fname:'',sname:'',email:'',Nid:''});
  let temp={fname:'',sname:'',email:'',Nid:''};

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{
    console.log(formData);
  }

  return(
    <>
     <Nav/>
     <div className="container">
     <center className="mt-5"> <h4><i>Acorn Hostels</i></h4></center>
     <div className="card mt-5">
       <div className="card-header text-center bg-primary text-white ">Want to Assign a Caretaker?</div>
       <div className="card-body">
          <div className="form-group">
          <label>Caretaker Name:</label>
           <div className="row">
             <div className="col-6">
                <input id="fname" name='fname'  onChange={handleChange}  className="form-control" type="text" placeholder="First Name"/>
                <em className='text-danger'>{problems.fname}</em>
              </div>
             <div className="col-6">
                <input id="sname" name='sname' onChange={handleChange}  className="form-control" type="email" placeholder="Second Name"/>
                <em className='text-danger'>{problems.sname}</em>
             </div>
           </div>
          </div>
          <div className="form-group">
          <label htmlFor="email">Caretaker's Email Address:</label>
          <input id="email"  name='email' className="form-control" onChange={handleChange} type="email" />
          <em className='text-danger'>{problems.email}</em>
          </div>
          <div className="form-group">
          <label htmlFor="Nid">Caretaker's National Identification Number:</label>
          <input id="Nid" name='Nid' className="form-control" onChange={handleChange} type="number" />
          <em className='text-danger'>{problems.Nid}</em>
          </div>

          <button className="btn btn-success form-control" onClick={handleSubmit}>Assign The Caretaker.</button>
       </div>

      </div>

      </div>

     <Footer />
    </>

  )
}
export default CaretakerRegister;
