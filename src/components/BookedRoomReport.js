import React,{useState} from 'react';
import Footer from '../components/footer';
import Topbar from '../components/Topbar';
import BooksReportTable from '../components/BooksReportTable';
import HostelSnapStats from '../components/HostelSnapStats';
import {useParams} from 'react-router-dom';

function BookedRoomReport() {
  let {roomId}=useParams();
  const books=[{
    name:'Marcus Mosaya',
    contact:'0113523551',
    occupation_date:'2024-09-14',
    evacuation_date:'2024-12-12'
  },
  {
    name:'Philis Jean',
    contact:'0713523551',
    occupation_date:'2024-09-14',
    evacuation_date:'2024-12-12'
  },
  {
    name:'Larry Oestrus',
    contact:'0723523551',
    occupation_date:'2024-10-14',
    evacuation_date:'2024-12-12'
  },
  {
    name:'Rudaceous Palaeo',
    contact:'0714723551',
    occupation_date:'2024-11-14',
    evacuation_date:'2024-12-12'
  },];
  const [inputValue,setInputValue]=useState('');
  const [filteredData,setFilteredData]=useState(books);
  const handleInputChange=(event)=>{
    const value=event.target.value;
    setInputValue(value);
    //We filter based on the name
    const filtered=books.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  }


  return(
     <>
      <Topbar/>
      <div className="container">
      <div className="row">
         <div className="col text-center"><h1>Acorn Hostels</h1></div>
    </div>
      <div className="row">
      <div className="col"><h3>Room Identification:{roomId}</h3></div>

      </div>
      <div className="horizontal-line"></div>
      <div className='row mt-3'>
        <div className='col-6'>
           <em className="text-success">To release space click on the row:</em>
         </div>
        <div className='col-6'>
           <div className="form-group">
              <input type="search" className='form-control' value={inputValue} placeholder="search..." onChange={handleInputChange} />
           </div>
         </div>
      </div>
      <BooksReportTable books={filteredData}/>
   </div>
      <Footer />
     </>
  )
}
export default BookedRoomReport;
