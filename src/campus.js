import React ,{useState,useEffect}from 'react';
function Campus(props){
  const campus=props.unicode;
  const [error,setError]=useState(false);
  const [campuses,setCampuses]=useState([])
   useEffect(()=>{
      fetch('http://localhost:8000/api/schools/campus/'+campus).then(response=>{
        if(!response.ok){
          throw new Error('Network response was no ok');
        }
        return response.json();
      }).then(campuses=>{
        setCampuses(campuses);
      }).catch(error=>{
        setError(error);
      });
    },[campus]);
  return(
    <>
    <select>
    {campuses.map((campuses)=>(
     (<option>{campuses.campus}</option>)
   ))}
   </select>
   </>
  )
}
export default Campus;
