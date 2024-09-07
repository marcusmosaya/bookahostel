import React,{useState} from 'react';
function Booked({handleBooked,hostelId}){
  const handleBook=handleBooked;
  const bookedRooms=[
    {id:'A',bookedSpaces:3},
    {id:'C',bookedSpaces:2},
    {id:'K',bookedSpaces:4},
    {id:'F',bookedSpaces:5},
    {id:'B',bookedSpaces:7},
  ];
  console.log(bookedRooms);
  const [inputValue,setInputValue]=useState('');
  const [filteredData,setFilteredData]=useState(bookedRooms);
  const handleInputChange=(event)=>{
    const value=event.target.value;
    setInputValue(value);
    //We filter based on the name
    const filtered=bookedRooms.filter(item=>item.id.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  }
  return(
    <>
    <div className='row mt-3'>
      <div className='col-6'>
         <h5>Booked Spaces:</h5>
       </div>
      <div className='col-6'>
         <div className="form-group">
            <input type="search" className='form-control' onChange={handleInputChange} value={inputValue}  placeholder="search..."/>
         </div>
       </div>
    </div>
    <table className="table table-striped table-hover">
   <thead className="text-center">
     <tr>
       <th>Room Identification</th>
       <th>Booked Spaces</th>
     </tr>
   </thead>
   <tbody className="text-center">
     {
       filteredData.map((filtered)=>(
         <tr id={filtered.id} onClick={handleBook}>
           <td>{filtered.id}</td>
           <td>{filtered.bookedSpaces}</td>
         </tr>
       ))
     }
   </tbody>
 </table>
    </>
  )
}
export default Booked;
