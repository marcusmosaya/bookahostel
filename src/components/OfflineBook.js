import React from 'react';
import {useParams} from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/footer';
function OfflineBook() {
  let {roomId}=useParams();
  const date=new Date();
  const year=date.getFullYear();
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const exactDate=date.getDate();
  const month=months[date.getMonth()];

  const after=`${year}-${month}-${exactDate}`;
  const handleCancel=()=>{
    window.history.back();
  }
  const handleBook=()=>{
    alert('hi');
  }
  return(
    <>
     <Topbar />
        <div className="container">

        <div className="row mt-3">
        <div className="col text-center">
               <div className="text-capitalize"><h3>Acorn Hostels</h3></div>
        </div>
        </div>

        <div className="card">
             <div className=" card-header bg-primary text-center text-white">
                 Book a Tenant Offline.
             </div>

            <div className="card-body bg-white">
                  <div className="form-group">
                  <label>When is the tenant planning to</label>
                   <div className="row mt-0">
                   <div className="col-6">
                  <label htmlFor="email" className="text-dark">Report:*</label>
                  <input type="date" placeholder='To download the receipt via a link'  className="form-control" min={after}/>
                   </div>
                   <div className="col-6">
                  <label htmlFor="email" className="text-dark">Evacuate:*</label>
                  <input type="date" className="form-control border-dark" min={after}/>
                   </div>
                   </div>
                  </div>
                    <div className="form-group">
                    <label htmlFor="email" className="text-dark">Email Address:*</label>
                    <input type="email" placeholder='To download the receipt via a link'  className="form-control"/>
                    </div>
                    <label htmlFor="phonenumber" className="text-dark">Phone Number:*</label>

                    <div className="input-group">
                    <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">+254</span>
                     </div>
                    <input type="number" placeholder="For SMS" className="form-control"/>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="row">
                    <button className="btn btn-danger col-4" onClick={handleCancel}>CANCEL
                    </button>
                    <div className="col-4 "></div>
                    <button className="btn btn-success col-4" onClick={handleBook}>Book</button>

                    </div>

            </div>
        </div>

        </div>
     <Footer />
    </>
  )

}
export default OfflineBook;
