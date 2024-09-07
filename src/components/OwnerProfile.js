import React from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
function OwnerProfile(){
  return(
    <>
    <Navbar />
      <div className="container">
        <div className="row">
             <div className="col text-center mt-2"><h4>Owner Profile</h4></div>
        </div>
        <div className="card">
           <div className="card-header bg-primary text-center text-white">
              This is how your profile looks like
           </div>
            <div className="card-body">
               <div className="form-group">
                 <label htmlFor="name">Owner's Name:</label>
                 <input className="form-control" id="name" type="text" value="Centum Real" />
               </div>
               <div className="form-group">
                 <label htmlFor="email">Email Address:</label>
                 <input className="form-control" id="email" type="text" value="mosaya@gmail.com" />
               </div>
                  <button className="btn btn-block btn-success">Save Changes</button>
            </div>
            <div className="card-footer text-center">
                 <Link to="/verify"><em>Want to change password?</em></Link>
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}
export default OwnerProfile;
