import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Footer from '../components/footer';
import Nav from '../components/nav';

function RoomRegister(){
  let{hostelId}=useParams();
  let validHostel=localStorage.getItem('holderId');
  const [formData,setFormData]=useState({hostel:validHostel,roomId:'',spaceAvailable:'',totalSpace:''});
  const [problems,setProblems]=useState({hostel:'',roomId:'',spaceAvailable:'',totalSpace:''})
  const temp={hostel:'',roomId:'',spaceAvailable:'',totalSpace:''};


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{
    if(!formData.roomId||!formData.spaceAvailable||!formData.totalSpace){
         alert("Please fill all the spaces")
    }
    else {
      if(formData.roomId){
        temp.roomId=''
        const regex=/^[A-Za-z@_]{2,}$/;
        if(!regex.test(formData.name)){
          temp.roomId='Name should be at least 2 characters long with numbers or with _ or @ as special characters.';
        }
      }
      if(formData.totalSpace){
        temp.totalSpace=''
        if(Number(formData.totalSpace)>8){
           temp.totalSpace="A room can't have room space more tha 8 it would be congested";
        }
      }
      if(formData.spaceAvailable){
        if(Number(formData.spaceAvailable)>Number(formData.totalSpace)){
          temp.spaceAvailable="The available space cannot be greater than the total space";
        }
      }
     setProblems(temp);
    }


  }


  return(
    <>
    <Nav/>
    <div className="container">
    <div className="card mt-5 border-dark">
      <div className="card-header text-center text-black bg-white font-weight-bold border-dark"><i className="text-primary text-uppercase">Acorn Hostels</i><br/>ADD A NEW ROOM</div>
      <div className="card-body">
         <div className="form-group mb-1">
         <label htmlFor="roomId">Room Identification:</label>
         <input id="roomId" name="roomId" onChange={handleChange} className="form-control" type="text"/>
         <em className='text-danger'>{problems.roomId}</em>

         </div>
         <div className="form-group mb-1">
         <label htmlFor="roomSpace">Total Number of spaces:</label>
         <input id="roomSpace" name="totalSpace" onChange={handleChange} className="form-control" type="number" min="0" max="8" placeholder='How many beds does it have?'/>
         <em className='text-danger'>{problems.totalSpace}</em>

         </div>
         <div className="form-group mb-1">
         <label htmlFor="availableRoomSpace">Available Number of spaces:</label>
         <input id="availableRoomSpace" name="spaceAvailable" onChange={handleChange} className="form-control" type="number" min="0" max="8"placeholder="How many beds are unoccupied"/>
         <em className='text-danger'>{problems.spaceAvailable}</em>
         </div>
         <div className="horizontal-line"></div>

         <button className="btn bg-success text-white form-control" onClick={handleSubmit}>ADD THE ROOM</button>
      </div>
     </div>

     </div>


    <Footer/>
    </>
  )
}
export default RoomRegister;
