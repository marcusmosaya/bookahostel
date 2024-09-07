import React,{useState,useEffect} from 'react';
function HostelSnapStats(props){
       const handleBookClick=props.handleBookClick;
       const handleAvailableClick=props.handleAvailableClick;
       const handleTotalClick=props.handleTotalClick;
       const selectedCard=props.selectedCard;
  return(
  <div className='row'>
      <div className='col col-lg bg-success text-white m-1 HostelSnapStats-border text-center' style={{border:selectedCard==='booked'?'5px solid cyan':'2px solid lightgray'}} onClick={handleBookClick}>
            <h5>Booked Spaces:</h5>
         <span className='display-4 text-center'>85</span>
      </div>
      <div className='col col-lg bg-success text-white m-1 HostelSnapStats-border text-center' style={{border:selectedCard==='available'?'5px solid cyan':'2px solid lightgray'}} onClick={handleAvailableClick}>
         <h5>Available Spaces:</h5>
         <span className='display-4'>15</span>
      </div>
      <div className='col col-lg bg-success text-white m-1 HostelSnapStats-border text-center' style={{border:selectedCard==='total'?'5px solid cyan':'2px solid lightgray'}} onClick={handleTotalClick}>
        <h5>Total Spaces:</h5>
         <span className="display-4">100</span>
      </div>

   </div>
)
}
export default React.memo(HostelSnapStats);
