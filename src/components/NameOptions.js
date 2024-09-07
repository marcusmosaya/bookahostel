import React from 'react';
import {useNavigate} from 'react-router-dom';
function NameOptions(props){
  const name=props.name;
  const hostelId=props.hostelId;
  const navigate=useNavigate();
  const handleSelectedOption=(event)=>{
    const selectedRoute=event.target.value;
    if(selectedRoute){
        navigate(selectedRoute)
    }
  }
  return(
  <>
      <div className="row mt-3">
      <div className="col-3">
             <div className="text-capitalize"><h3>{name}</h3></div>
      </div>
      <div className="col-9">
          <div className="form-group">
           <select className="form-control" onChange={handleSelectedOption}>
              <option disabled selected>Select Something.</option>
              <option value={`/hostel/${hostelId}/update`}>Update the hostel details.</option>
              <option value={`/hostel/${hostelId}/caretaker/register`}>Assign a caretaker.</option>
              <option value={`/hostel/${hostelId}/room/register`}>Add a new room.</option>
           </select>
          </div>
          </div>

      </div>
  </>);
}
export default NameOptions;
