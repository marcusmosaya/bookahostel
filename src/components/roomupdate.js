import React from 'react';
import {useParams} from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';
function RoomUpdate(){
  let {hostelId}=useParams();
  return(
    <>
    <Nav/>
    <div className="container">
    <div className="card mt-5 border-dark">
      <div className="card-header text-center text-black bg-white font-weight-bold border-dark"><i className="text-primary text-uppercase">Acorn Hostels</i><br/>UPDATE ROOM PROFILE</div>
      <div className="card-body">
         <div className="form-group mb-1">
         <label htmlFor="roomId">Room Identification:</label>
         <input id="roomId" className="form-control text-center bg-info text-white" disabled type="text" value='QRT'/>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="roomSpace">Total Number of spaces:</label>
         <input id="roomSpace" className="form-control" type="number" placeholder='How many beds does it have?'/>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="availableRoomSpace">Available Number of spaces:</label>
         <input id="availableRoomSpace" className="form-control" type="number" placeholder="How many beds are unoccupied"/>
         </div>
         <div className="horizontal-line"></div>

         <button className="btn bg-success text-white form-control">UPDATE THE ROOM PROFILE</button>
      </div>
     </div>

     </div>
     <Footer/>
     </>
  )
}
export default RoomUpdate;
