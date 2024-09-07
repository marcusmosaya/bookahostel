import React,{useState} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import Topbar from '../components/Topbar';
import SideBar from '../components/sidebar';
import MainContent from '../components/maincontent';
import HostelSnapStats from '../components/HostelSnapStats';
import NameOptions from '../components/NameOptions'
import Footer from '../components/footer';
import RoomBody from '../components/RoomBody'

function Hostel(){
  let {hostelId}=useParams()
  const [opened,setOpened]=useState(false);
  const toggleSideBar=()=>{
    setOpened(!opened);
  }
  const [selectedCard,setSelectedCard]=useState('booked')
  const handleBookClick=()=>{
     setSelectedCard('booked')
  }
  const handleAvailableClick=()=>{
     setSelectedCard('available')
  }
  const handleTotalClick=()=>{
    setSelectedCard('total')
  }
  return(
    <>
    <Topbar toggleSideBar={toggleSideBar}/>
    <div className='dashboard-container'>
    <SideBar  isopen={opened} />
       <MainContent className="container">
         <NameOptions name="Acorn"  hostelId={hostelId}/>
         <HostelSnapStats  selectedCard={selectedCard} handleBookClick={handleBookClick} handleAvailableClick={handleAvailableClick} handleTotalClick={handleTotalClick} hostelId={hostelId}/>
         <RoomBody selectedCard={selectedCard}  hostelId={hostelId} />
       </MainContent>
       </div>
    <Footer/>
    </>

  )
}
export default Hostel;
