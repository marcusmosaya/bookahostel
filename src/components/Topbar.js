import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../Navbar.css';


function Topbar({toggleSideBar}) {
  const [profileVisible,setProfileVisible]=useState(false);
  const [display,setDisplay]=useState('none');
  let displaystyle={'display':display};
  let role={'role':'caretaker'};
  const navigate=useNavigate();
  const handleProfile=()=>{
     if(role.role=='owner'){
       navigate('/owner/profile');
     }
     else {
       {
         navigate('/caretaker/profile');
       }
     }


  }
  const handleLogout=()=>{

    alert('successful');


  }
  const handleBookProfileView=(event)=>{
    const col=event.target;
    console.log(profileVisible);
    setProfileVisible(!profileVisible);

  }
  useEffect(()=>{
    if(profileVisible===false){
      setDisplay('none');
    }
    else if(profileVisible===true){
      setDisplay('block');
    }
  },[profileVisible]);

  return(
    <>
    <nav className="navbar bg-primary navbar-dark navbar-fixed-top navbar-inverse">
    <div className="burger" onClick={toggleSideBar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <a className="navbar-brand mx-1" href="#">BookAHostel.com</a>

    <div className="profile" >
      <img src={require('../img/a.jpg')} onClick={handleBookProfileView} />
      <div className="profile-pop" style={displaystyle}>
        <ul className="list-group">
         <li className="list-group-item" onClick={handleProfile}>View my Profile</li>
         <li className="list-group-item" onClick={handleLogout}>logout</li>
        </ul>
      </div>
    </div>

</nav>
    </>
  );
}
export default Topbar;
