import React,{useState} from 'react';
function Total(props) {
  const handleRoom=props.handleRoom;
  const totalRooms=[
    {id:'N',unbookedSpaces:3,bookedSpaces:1},
    {id:'M',unbookedSpaces:2,bookedSpaces:2},
    {id:'K',unbookedSpaces:4,bookedSpaces:0},
    {id:'F',unbookedSpaces:5,bookedSpaces:0},
    {id:'B',unbookedSpaces:7,bookedSpaces:0},
  ];
  const [inputValue,setInputValue]=useState('');
  const [filteredData,setFilteredData]=useState(totalRooms);
  const handleInputChange=(event)=>{
    const value=event.target.value;
    setInputValue(value);
    //We filter based on the name
    const filtered=totalRooms.filter(item=>item.id.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  }
  return(
    <>
    <div className='row mt-3'>
      <div className='col-6'>
         <h5>Total Spaces:</h5>
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
       <th>Unbooked Spaces</th>
       <th>Booked Spaces</th>
     </tr>
   </thead>
   <tbody className="text-center">
   {
     filteredData.map((filtered)=>(
       <tr id={filtered.id} onClick={handleRoom}>
         <td>{filtered.id}</td>
         <td>{filtered.unbookedSpaces}</td>
         <td>{filtered.bookedSpaces}</td>
       </tr>
     ))
   }
   </tbody>
 </table>
    </>
  )
}
export default Total;
