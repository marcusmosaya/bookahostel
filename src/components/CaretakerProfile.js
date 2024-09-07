import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/nav';
import Footer from '../components/footer';



function CaretakerProfile() {
  function listImages(event){
    const gallery=document.getElementById('photoContainer');
    let files=event.target.files;
    if(gallery.innerHTML===null){
      Array.from(files).forEach(file=>{
        const reader= new FileReader();
        reader.onload=(e)=>{
          const img=document.createElement('img');
            img.setAttribute('id',file.name);
            img.addEventListener('click',handleImage);

          img.src=e.target.result;
          gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      });

    }
    else {
      gallery.innerHTML='';
      Array.from(files).forEach(file=>{
        const reader= new FileReader();
        reader.onload=(e)=>{
          const img=document.createElement('img');
          img.setAttribute('id',file.name);
          img.addEventListener('click',handleImage);

          img.src=e.target.result;
          gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      });

    }

  }

  const handleImage=()=>{
     let fileInvoked=document.createElement('input');
     fileInvoked.setAttribute('type','file');
     fileInvoked.setAttribute('accept','images/*');
     fileInvoked.setAttribute('id','pPhoto');
     fileInvoked.addEventListener('change',listImages);
     fileInvoked.click();

  }

  return(
    <>
     <Navbar />
      <div className="container">
       <div className="row">
         <div className="col text-center">
              <h3>Acorn Hostels</h3>
          </div>
       </div>
       <center>
       <div className="photoContainer" id="photoContainer">
          <img src={require('../img/b.jpg')} onClick={handleImage} />

       </div>
       </center>
       <div className="card">
        <div className="card-header p-4 bg-primary border-primary">
        </div>
        <div className="card-header bg-primary text-center text-white text-capitalize">

            <h4> Check your Profile</h4>
        </div>
        <div className="card-body">
           <div className="row">
           <div className="col">
              <label>Name:</label>
              <div className="form-control text-capitalize">James Junior</div>
             </div>
             </div>
            <div className="row">
             <div className="col">
                <label>Email Address:</label>
                <div className="form-control">Jjames@gmail.com</div>
               </div>
               </div>
               <div className="row">
               <div className="col">
                  <label>National ID number:</label>
                  <div className="form-control text-capitalize">54678902</div>
                 </div>
                 </div>
           <div/>
           <div className="card-footer text-center mt-2 border-dark">
             <Link to="/verify" className=" text-success">Want to change your password?</Link>
                        <div className="horizontal-line"></div>
                       <em>Click on the image to change your profile photo.</em>
           </div>
        </div>
       </div>

      </div>

     <Footer />
    </>
  )
}

export default CaretakerProfile;
