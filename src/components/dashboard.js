import React,{useState,useEffect} from 'react';
import Topbar from '../components/Topbar';
import SideBar from '../components/sidebar';
import MainContent from '../components/maincontent';
import Footer from '../components/footer';
import OwnerName from '../components/dashboard/OwnerName';
import Portfolio from '../components/dashboard/Portfolio';
import OccupationCharts from '../components/dashboard/OccupationCharts';
import FinancialsCharts from '../components/dashboard/FinancialsCharts';

function Dashboard(){

  const [opened,setOpened]=useState(false);
  const toggleSideBar=()=>{
    setOpened(!opened);
  }
  console.log(localStorage.getItem('accessToken'));
  return(
      <>
       <Topbar toggleSideBar={toggleSideBar}/>
       <div className="dashboard-container">
        <SideBar  isopen={opened}/>
        <MainContent>
         <OwnerName companName='Centum Re' />
         <Portfolio />
         <div className="horizontal-line mt-1 mb-2" />
         <div className="row bg-light mx-1">
          <div className="col text-capitalize text-center"><span><h4>Acorn Hostels Perfomance report.</h4></span></div>
         </div>
         <OccupationCharts />
         <div className="horizontal-line mt-1 mb-2" />
         <div className="row bg-light mx-1">
          <div className="col text-capitalize text-center"><span><h4>Fiscal report.</h4></span></div>
         </div>
           <FinancialsCharts />
        </MainContent>
       </div>
       <Footer />
      </>
  )
}
export default Dashboard;
