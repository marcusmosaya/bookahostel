import React ,{useState,useEffect}from 'react';
function Campus(props){
  const campus=props.unicode;
  const [error,setError]=useState(false);
  const [campuses,setCampuses]=useState([])
   useEffect(()=>{
      fetch('http://localhost:8000/api/schools/'+campus).then(response=>{
        if(!response.ok){
          throw new Error('Network response was no ok');
        }
        return response.json();
      }).then(campuses=>{
        setCampuses(campuses);
        {campuses.forEach((campuses)=>(
         console.log('hi')
       ))}

      }).catch(error=>{
        setError(error);
      });
    },[campus]);
  return(
    <>
   <div className="form-group">
     <label htmlFor="campus">Choose Campus:</label>
     <select id="campus" className="form-control">
        {campuses.map((campuses)=>(
          (<option>{campuses.campus}</option>)
         ))}
   </select>
   </div>
   </>
  )
}
export default Campus;
