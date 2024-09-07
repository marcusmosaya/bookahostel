import React,{useState} from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import {Link} from 'react-router-dom';
function HostelRegister(){
  let temp={state:false,name:'',bankAccountNumber:'',description:'',deposit:'',rentPrice:'',images:'',location:''};
  const [location,setLocation]=useState(null);
  const [error,setError]=useState(null);
  const holder= localStorage.getItem('holderId');
  const [formData,setFormData]=useState({holderId:holder,name:'',bankAccountNumber:'',description:'',rentPrice:'',deposit:'',lon:'',lat:'',images:{}});
  const images=document.getElementById('images');
  const [problems,setProblems]=useState({state:false,name:'',bankAccountNumber:'',description:'',deposit:'',rentPrice:'',images:'',location:''});

  const getLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          setLocation(position);
          setFormData({...formData,lon:position.lon,lat:position.lat});
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
      return;
    }
    console.log(files);
    setFormData({...formData,images:files});
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
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }


  const handleSubmit=()=>{
    let data={name:formData.name}
      if(!formData.name||!formData.bankAccountNumber||!formData.description||!formData.rentPrice||!formData.deposit){
        alert('Please Ensure you fill all spaces');
      }else{
        if(formData.name){
          const regex=/^[A-Za-z@_ ]{2,}$/;
          temp.name='';
          if(!regex.test(formData.name)){
            temp.name='Name should be at least 2 characters long with numbers or with _ or @ as special characters.';
          }

        }
        if(formData.bankAccountNumber){
          const regex=/^[A-Za-z0-9]{12,18}$/;
          temp.bankAccountNumber='';
          if(!regex.test(formData.bankAccountNumber)){
            temp.bankAccountNumber='The bank account number should be at least 12 characters long with no special characters.';
          }
          console.log(formData.bankAccountNumber);

        }
        if(formData.description){
          const regex=/^[^><]{100,}$/;
          temp.description='';
          if(!regex.test(formData.description)){
            temp.description='The description should be at least 100 characters long without < and >.';
          }
        }
        if(formData.rentPrice){
          temp.rentPrice=''
           if(!(Number(formData.rentPrice)>=10000 && Number(formData.rentPrice)<=1000000)){
             temp.rentPrice='The rent is not within the limits 1,000 and 100,000';
           }
        }
        if(formData.deposit){
           temp.deposit='';
           if(!(Number(formData.deposit)<=Number(formData.rentPrice) && (Number(formData.deposit)/Number(formData.rentPrice))>=0.2 && (Number(formData.deposit)/Number(formData.rentPrice)<=0.5))){
             temp.deposit='The deposit is not within the limits that is less than the rent and within 20% and 50% of the rent';

           }
           setProblems(temp);
        }

      }
  }
  return(
    <>
    <Nav />
    <div className="container">
    <div className="card mt-5 border-dark">
      <div className="card-header text-center text-black bg-white font-weight-bold border-dark">REGISTER YOUR HOSTEL</div>
      <div className="card-body">
         <div className="form-group mb-1">
         <label htmlFor="hostelName">Hostel Name:</label>
         <input id="name" name='name' onChange={handleChange} className="form-control" type="text"/>
         <em className='text-danger'>{problems.name}</em>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="rent">Room space rent cost:</label>
         <input id="rentPrice" name="rentPrice" onChange={handleChange}  className="form-control" type="number" placeholder='We offer uniform room rent cost'/>
         <em className='text-danger'>{problems.rentPrice}</em>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="deposit">Room space deposit:</label>
         <input id="deposit"  name="deposit" onChange={handleChange} className="form-control" type="number" placeholder=""/>
         <em className='text-danger'>{problems.deposit}</em>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="hostelName">Bank Account Number:</label>
         <input id="bankAccountNumber" name='bankAccountNumber' onChange={handleChange} className="form-control" type="text"/>
         <em className='text-danger'>{problems.bankAccountNumber}</em>
         </div>
         <div className="form-group mb-1">
         <label htmlFor="description">Description:</label>
         <textarea id="description" name="description" onChange={handleChange} rows="5" className="form-control" placeholder="A brief description of the hostel to market it."></textarea>
         <em className='text-danger'>{problems.description}</em>
         </div>
         <div className="custom-file mt-2 mb-2">
              <input type="file" name="images"  className="custom-file-input" multiple onChange={listImages} id="images" accept="images/*" />
               <label className="custom-file-label" htmlFor="images" >Choose Images:A maximum of 4</label>

               <div className="gallery" id="gallery"></div>
               <em className='text-danger'>{problems.images}</em>
          </div>
         <div className="form-group mb-1">
         <label htmlFor="password" className="mb-0">Location:</label><br/>
         <i className="text-success text-sm">Go to the hostels physical location then click.</i>
         <button id="password" className="form-control bg-success text-white" type="button" onClick={getLocation}>Detect Location.</button>
         {location?(<p>Lon:{JSON.stringify(location.coords.longitude)},Lat:{JSON.stringify(location.coords.latitude)}</p>

       ):(<p>{error}</p>)}
         <em className='text-danger'>{problems.location}</em>
         </div>
         <div className="horizontal-line"></div>

         <button className="btn bg-primary text-white form-control" onClick={handleSubmit}>SUBMIT</button>
      </div>
     </div>

     </div>

     <Footer/>
     </>
  )
}
export default HostelRegister;
