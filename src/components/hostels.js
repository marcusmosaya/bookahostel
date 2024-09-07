import React,{useEffect,useState} from 'react';
import Nav from '../components/nav';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import HostelCard from '../components/HostelCard';
import LoadingMore from '../components/loadingMore';
function Hostels() {
  const [data,setData]=useState([{name:'Acorn',id:'1337',imagURL:"../img/a.jpg",rent:'15000',deposit:'5000',distance:'3'},{name:'Victoria',id:'1338',imagURL:"../img/b.jpg",rent:'18000',deposit:'5000',distance:'2.4'},
                       {name:'Obama',id:'1339',imagURL:"../img/c.jpg",rent:'17000',deposit:'7000',distance:'2.2'},{name:'Qejani',id:'1340',imagURL:"../img/d.jpg",rent:'15000',deposit:'5000',distance:'1.4'},{name:'McOtieno',id:'1341',imagURL:"../img/e.jpg",rent:'25000',deposit:'8000',distance:'2.4'},{name:'Ndere',id:'1342',imagURL:"../img/f.jpg",rent:'15000',deposit:'5000',distance:'3'},{name:'Greener Pastures',id:'1343',imagURL:"../img/g.jpg",rent:'15000',deposit:'5000',distance:'3'},{name:'Acorn',id:'1344',imagURL:"../img/h.jpg",rent:'10000',deposit:'5000',distance:'1.7'}]);
  const [loading,setLoading]=useState(false);
  const handleScroll=()=>{
    if(document.body.scrollHeight-300<window.scrollY+window.innerHeight){
      setLoading(true);
    }
    else {
      setLoading(false);
    }
  }
  function debounce(func,delay){
    let timeoutId;
    return function (...args){
      if(timeoutId){
        clearTimeout(timeoutId);
      }
      timeoutId=setTimeout(()=>{
        func(...args);
      },delay);
    }
  }
  window.addEventListener("scroll",debounce(handleScroll,1000));
  const styling={borderRadius:'10px'};
  return(
    <>
    <Nav   />
    <div className="hh" style={{position:'sticky',zIndex:999,top:55,backgroundColor:'black',opacity:0.4}} >
    <div className="row mt-2 mb-2 tx" >
      <div className="col-3 pl-5"><em className="mt-1 mb-4 h5 text-white">Hostels:</em></div>
      <div className="col-9 pl-5">
        <input type='search' className="form-control form-control-sm w-75 ml-5"  placeholder="Search..." />
      </div>
    </div>
    <div className="horizontal-line mt-4 mb-5" style={{height:50}}></div>
    </div>
    <div className="container" style={{top:100}}>

    <div className="row pt-3 bg-light">
        {data.length>1 && data.map(item=>(<HostelCard id={item.id} name={item.name} distance={item.distance} imageURL={item.imagURL} deposit={item.deposit} rent={item.rent} />))}
        {loading && <><em className="mx-5 h4 text-primary">Loading more hostels<span className="loader">  ....</span></em></>}
    </div>
    </div>
    <Footer/>
    </>
  )

}
export default Hostels;
