import React from 'react';
import {useParams} from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';
function CaretakerUpdate(){
  let {hostelId}=useParams();
  return(
    <>
    <Nav/>
    <div className="container">
    <center className="mt-5"> <h4><i>Acorn Hostels</i></h4></center>
    <div className="card mt-5">

      <div className="card-header text-center bg-primary text-white ">Want to Update the Caretaker's profile?</div>
          <div className="bg-white caretakerProfileHolder text-center">

            <img className="caretakerProfileImage p-1" src={require('../img/a.jpg')}/>
          </div>

      <div className="card-body">
         <div className="form-group">
         <label>Caretaker Name:</label>
          <div className="row">
            <div className="col-6">
               <input id="fname" className="form-control" type="text" placeholder="First Name"/>
             </div>
            <div className="col-6">
               <input id="sname" className="form-control" type="email" placeholder="Second Name"/>

            </div>
          </div>
         </div>
         <div className="form-group">
         <label htmlFor="email">Caretaker's Email Address:</label>
         <input id="email" className="form-control" type="email" />
         </div>
         <div className="form-group">
         <label htmlFor="Nid">Caretaker's National Identification Number:</label>
         <input id="Nid" className="form-control" type="number" />
         </div>

         <button className="btn btn-success form-control">Update The Caretaker Profile.</button>
      </div>

     </div>

     </div>


    <Footer />
    </>
  )
}
export default CaretakerUpdate;
