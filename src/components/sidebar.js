import React,{useState,useEffect} from 'react';
import '../sidebar.css';
import {Link} from 'react-router-dom';

function SideBar(props){
  const isSideBarOpen=props.isopen;
  const [display,setDisplay]=useState('none');
  let newDisplay={'display':display};
  const [drop,setDrop]=useState(false);
  const [displayDrop,setDisplayDrop]=useState('none');
  let droped={'display':displayDrop};
  const triggerDrop=()=>{
    setDrop(!drop)
  }

  useEffect(()=>{
    if(isSideBarOpen===false){
      setDisplay('none');
    }
    else{
      setDisplay('block');
    }
    if(drop===false){
      setDisplayDrop('none');
    }
    else{
      setDisplayDrop('block');
    }

  },[isSideBarOpen,drop])
  return(
    <div className="sidebar bg-info" id="sidebar" style={newDisplay}>
     <ul>
      <li><Link to='/dashboard'>Dashoard</Link></li>
      <li ><
      span className="drop-trigger"onClick={triggerDrop}>Hostels</span>
           <ul className="drop-items"  style={droped} >
            <li><Link to='/hostel/1340'>Victoria</Link></li>
            <li><Link to='/hostel/1339' >Amen</Link></li>
            <li><Link to='/hostel/1338'>Eden</Link></li>
            <ul className='new-hostel'><li>
                <Link to='/hostel/register'>Add an new hostel</Link>
            </li>
            </ul>
           </ul>


      </li>
      <li><Link to='/Financials'>Financials</Link></li>
     </ul>
    </div>
  )
}
export default React.memo(SideBar);
