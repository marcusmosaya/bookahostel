import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import {useParams} from 'react-router-dom';
function Room() {
  let {roomId}=useParams();
  return(
        <>
       <Nav />
       <div className="container">
       <center className="mt-5"> <h4><i>Acorn Hostels</i></h4></center>
       <div className="card mt-5">
         <div className="card-header text-center bg-primary text-white ">Room Updates</div>
         <div className="card-body">
            <div className="form-group">
            <label htmlFor="Rid">Room Identification:</label>
            <input id="Rid" className="form-control text-center" type="text" placeholder=" To identify your room"/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Total Room Space:</label>
              <div className="row">
                <div className="col-4">
                  <button className="btn bg-info btn-block text-white">+</button>
                </div>
                <div className="col-4">
                   <div className="btn bg-light btn-block text-dark">9</div>
                </div>
                <div className="col-4">
                <button className="btn bg-danger btn-block text-white">&minus;</button>

                </div>

              </div>
            </div>
         </div>
         <div className="card-footer bg-white text-center">
         <button className="btn btn-success btn-block">Save changes</button>
         <button className="btn btn-secondary btn-block">Book Offline</button>

         </div>
        </div>

        </div>
       <Footer />
       </>
  )

}
export default Room;
