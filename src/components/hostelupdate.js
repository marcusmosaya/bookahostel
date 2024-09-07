import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';
function HostelUpdate(){
  let {hostelId}=useParams();
  const [selectedImage,setSelectedImage]=useState(null);
  const [location,setLocation]=useState(null);
  const [error,setError]=useState(null);
  const images=document.getElementById('images');
  const getLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          setLocation(position);
          console.log(position);
        },
        (err)=>{
          setError(err.message);        }
      );
    }
    else {
      setError("Geolocation is not supported by this browser,use an alternative browser ");
    }
  }
  const listImages=(event)=>{
    const gallery=document.getElementById('gallery');
    let files=event.target.files;
    if(files.length>4){
      console.log(files);
      alert('should be a maximum of 4');
      files={};
    }
    console.log(files);
    if(gallery.innerHTML===null){
      Array.from(files).forEach(file=>{
        const reader= new FileReader();
        reader.onload=(e)=>{
          const img=document.createElement('img');
            img.setAttribute('id',file.name);
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
          img.src=e.target.result;
          gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      });

    }

  }
  const handleImageClick=(id)=>{
    setSelectedImage(id);
  }

  return(
    <>
    <Nav />
    <div className="container">
    <div className="card mt-5 border-dark">
      <div className="card-header text-center text-black bg-white font-weight-bold border-dark">UPDATE YOUR HOSTEL DETAILS</div>
      <div className="card-body">
         <div className="form-group mb-1">
         <label htmlFor="hostelName">Hostel Name:</label>
         <input id="hostelName" className="form-control border-dark" type="text"/>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="rent">Room space rent cost:</label>
         <input id="rent" className="form-control border-dark" type="number" placeholder='We offer uniform room rent cost'/>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="deposit">Room space deposit:</label>
         <input id="deposit" className="form-control border-dark" type="number" placeholder=""/>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="description">Description:</label>
         <textarea id="description" rows="5" className="form-control border-dark" placeholder="A brief description of the hostel to market it."></textarea>
         </div>
         <div className="custom-file mt-2 mb-2">
               <label htmlFor="images" >Select An Image You want to change Then click the button:</label>

               <div className="gallery" id="gallery">
                  <img key='1' src={require('../img/a.jpg')} onClick={()=>handleImageClick('1')} style={{border:selectedImage==='1'?'5px solid red':'2px solid lightgray'}}/>
                  <img key='2' src={require('../img/b.jpg')} onClick={()=>handleImageClick('2')} style={{border:selectedImage==='2'?'5px solid red':'2px solid lightgray'}}/>

               </div>
               <button className="btn btn-dark btn-block mt-2" id="images">Change Image</button>


          </div>
         <div className="form-group mb-1 mt-2">
         <label htmlFor="password" className="mb-0">Location:</label><br/>
         <i className="text-success text-sm">Go to the hostels physical location then click.</i>
         <button id="password" className="form-control bg-success text-white" type="button" onClick={getLocation}>Update Location.</button>
         {location?(<p>Lon:{JSON.stringify(location.coords.longitude)},Lat:{JSON.stringify(location.coords.latitude)}</p>
       ):(<p>{error}</p>)}
         </div>
         <div className="horizontal-line"></div>

         <button className="btn bg-primary text-white form-control">UPDATE</button>
      </div>
     </div>

     </div>

     <Footer/>
     </>
  )
}
export default HostelUpdate;
