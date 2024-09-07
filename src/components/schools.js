import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../components/footer';
import Campus from '../components/campus';


function Schools() {
  const navigate=useNavigate();
  const [school,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]= useState(null);
  const [campus,setCampus]=useState(null);
  const [stagnant,setStagnant]=useState(true);
  const [schoolChange,setSchoolChange]=useState(false);

  const HandleCampusChange = (event)=>{
    setCampus(event.target.value);

  };
  useEffect(()=>{

    fetch('http://localhost:8000/api/schools').then(response=>{
      if(!response.ok){
        throw new Error('Network response was n ok');
        console.log(response);
      }
      return response.json();
    }).then(school=>{
      //console.log(school);
      setData(school);
      setLoading(false);
    }).catch(error=>{
      setError(error);
      setLoading(false);
    });
  },[]);
  if(loading) return <p>Loading ...</p>;
  if(error) return <p>Error:{error.message}</p>;



  return(


    <>

    <div className="container">
    <center className="mt-5"> <h4><i>BookAHostel.com</i></h4></center>
    <div className="card mt-5">
      <div className="card-header text-center bg-primary text-white ">SCHOOL FORM</div>
      <div className="card-body">
         <div className="form-group">
         <label htmlFor="school">Choose School:</label>
         <select id="school"className="form-control" onChange={HandleCampusChange}>
               <option value="nothing">Select a school</option>
            {school.map((school)=>(
               <option value={school.universityCode}>{school.name}</option>
             ))}
         </select>
         </div>

          <Campus unicode={campus}/>

         <button onClick={()=>navigate('/hostels')} className="btn btn-primary form-control">Submit</button>
      </div>
      <div className="card-footer bg-white text-center">We take you close to school.</div>
     </div>

     </div>
     <Footer/>
     </>
  )

}
export default Schools;
