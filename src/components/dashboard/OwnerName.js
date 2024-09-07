import React from 'react';
function OwnerName(props){
  const companyName=props.companName;
  return(
    <div className="row">
       <div className="col text-center text-capitalize mt-3">
          <h3>{companyName}</h3>
       </div>
    </div>
  )
}
export default OwnerName;
