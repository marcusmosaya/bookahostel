import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function RoomList(props){
  const available=props.opt;
  const navigate=useNavigate();
  const handleRoom=(event)=>{
    const col=event.target;
    const parent=col.parentNode;
    const rowId=parent.id;
    navigate(`/room/${rowId}/offlinebook`)

  }
  const handleBookedRoom=(event)=>{
    const col=event.target;
    const parent=col.parentNode;
    const rowId=parent.id;
    navigate(`/room/${rowId}/booked`);

  }

   return(
     <>
     {available?  (<><div className='horizontal-line'></div>
       <div className='row mt-3'>
         <div className='col-8'>
            <h5>Currently Available Spaces:</h5>
            <em className="text-success">Click on the specific rooms row to offline book a hostel space.</em>
          </div>
       </div>
       <table className="table table-striped table-hover">
      <thead className="text-center">
        <tr>
          <th>Room Identification</th>
          <th>Available Spaces</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr id='nm' onClick={handleRoom}>
          <td >A</td>
          <td>4</td>

        </tr>
        <tr>
          <td>B</td>
          <td>2</td>

        </tr>
        <tr>
          <td>C</td>
          <td>4</td>

        </tr>
      </tbody>
    </table></>): (<> <div className='horizontal-line'></div>
      <div className='row mt-3'>
        <div className='col-6'>
           <h5>Booked Spaces:</h5>
         </div>
      </div>
      <table className="table table-striped table-hover">
     <thead className="text-center">
       <tr>
         <th>Room Identification</th>
         <th>Booked Spaces</th>
       </tr>
     </thead>
     <tbody className="text-center">
       <tr id='nm' onClick={handleBookedRoom}>
         <td >A</td>
         <td>3</td>

       </tr>
       <tr>
         <td>B</td>
         <td>1</td>

       </tr>
       <tr>
         <td>C</td>
         <td>2</td>

       </tr>
     </tbody>
   </table></>)}
  </>
   )
}
export default RoomList;
