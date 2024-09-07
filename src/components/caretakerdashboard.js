import React,{useState,useEffect} from 'react';
import Footer from '../components/footer';
import Topbar from '../components/Topbar';
import RoomList from '../components/RoomList';
import {useParams,useNavigate} from 'react-router-dom';
function CaretakerDashboard(){
  const [available,setAvailable]=useState(true);
  const [selectedCard,setSelectedCard]=useState('available');
  const navigate=useNavigate();
  const handleScan=()=>{
    navigate('/scan');
  }
  const handleAvailable=(event)=>{
    setAvailable(true);
  }
  const handleBooked=(event)=>{
    setAvailable(false);
  }
  const handleParentBooked=(event)=>{
    setAvailable(false);
  }
  const handleParentAvailable=(event)=>{
    setAvailable(true);

  }
  useEffect(()=>{
    if(available===true){
      setSelectedCard('available');
    }
    else {
      setSelectedCard('booked');
    }
  },[available]);

  return(
    <>
    <Topbar />
     <div className="container">
       <div className="row">
         <div className="col col-sm col-lg">
            <div className="text-capitalize text-center "><h3>Acorn Hostels</h3></div>
         </div>
       </div>
       <div className="row text-white">
         <div className="col col-sm-6 col-lg-5 bg-success m-1  care-border text-center" style={{border:selectedCard==='available'?'5px solid cyan':'2px solid lightgray'}} id='available' onClick={handleAvailable}>
         <h5 onClick={handleParentAvailable}>Available Spaces:</h5>
         <span className='display-4' onClick={handleParentAvailable}>15</span>
        </div>
         <div className="col col-sm-6 col-lg-5 bg-success m-1  care-border text-center" style={{border:selectedCard==='booked'?'5px solid cyan':'2px solid lightgray'}} id='booked' onClick={handleBooked}>
            <h5 onClick={handleParentBooked}>Booked Spaces:</h5>
            <span className='display-4' onClick={handleParentBooked}>16</span>
          </div>

       </div>
       <RoomList opt={available} />
       <div className="d-flex flex-row-reverse p-2 ">
       <button className="btn btn-info btn-lg bookButton" onClick={handleScan}>
        Quick SCAN
       </button>
       </div>
     </div>
    <Footer />
    </>
  )

}
export default CaretakerDashboard;
