import React from 'react';
import {useNavigate} from 'react-router-dom';
import Available from '../components/Available';
import Booked from '../components/Booked';
import Total from '../components/Total';
function RoomBody({selectedCard,hostelId}) {
  const navigate=useNavigate();
  const selected=selectedCard;
  const hostel=hostelId;
  const handleRoom=(event)=>{
    const col=event.target;
    const parent=col.parentNode;
    const rowId=parent.id;
    navigate(`/room/${rowId}`);
  }
  const handleBooked=(event)=>{
    const col=event.target;
    const parent=col.parentNode;
    const rowId=parent.id;
    navigate(`/room/${rowId}/booked`);
  }
  const handleAvailable=(event)=>{
    const col=event.target;
    const parent=col.parentNode;
    const rowId=parent.id;
    navigate(`/room/${rowId}/offlinebook`);
  }
  const display=()=>{
    switch (selected) {
      case "booked":
        return <Booked handleBooked={handleBooked}/>
        break;
      case "available":
        return <Available handleAvailable={handleAvailable}/>
      case "total":
         return <Total handleRoom={handleRoom}/>
      default:
         return <Booked handleRoom={handleRoom}/>

    }
  }
  return(
    <>
     <div className='horizontal-line'></div>
     {display()}
    </>
  )

}
export default RoomBody;
