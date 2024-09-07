import React,{useState} from 'react';
function Available(props){
  const handleAvailable=props.handleAvailable;
  const availableRooms=[
    {id:'N',unbookedSpaces:3},
    {id:'M',unbookedSpaces:2},
    {id:'K',unbookedSpaces:4},
    {id:'F',unbookedSpaces:5},
    {id:'B',unbookedSpaces:7},
  ];
  const [inputValue,setInputValue]=useState('');
  const [filteredData,setFilteredData]=useState(availableRooms);
  const handleInputChange=(event)=>{
    const value=event.target.value;
    setInputValue(value);
    //We filter based on the name
    const filtered=availableRooms.filter(item=>item.id.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  }
  return(
    <>
    <div className='row mt-3'>
      <div className='col-6'>
         <h5>Available Spaces:</h5>
       </div>
      <div className='col-6'>
         <div className="form-group">
            <input type="search" className='form-control'  onChange={handleInputChange} value={inputValue}    placeholder="search..."/>
         </div>
       </div>
    </div>
    <table className="table table-striped table-hover">
   <thead className="text-center">
     <tr>
       <th>Room Identification</th>
       <th>Unbooked Spaces</th>
     </tr>
   </thead>
   <tbody className="text-center">
   {
     filteredData.map((filtered)=>(
       <tr id={filtered.id} onClick={handleAvailable}>
         <td>{filtered.id}</td>
         <td>{filtered.unbookedSpaces}</td>
       </tr>
     ))
   }
   </tbody>
 </table>
    </>
  )
}
export default Available;
