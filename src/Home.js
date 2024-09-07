import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from './components/footer';
function Home(){

  const [open,setOpen]=useState(false);
  const [display,setDisplay]=useState('none');
    let newDisplay={"display":display,"backgroundColor":'lightgray'}
  const doBugger=()=>{
    setOpen(!open);
  }
  useEffect(()=>{
    if(open===false){
      setDisplay('none');
    }
    else {
      setDisplay('block');
    }
  },[open])



  return(
    <>
    <nav className="theNav bg-primary">
        <div class="logo text-white">BookAHostel.com</div>
        <ul class="nav-links">
        <li class="nav-active"><a href="#home">Home</a></li>
        <li><a href="#services">Sercices Offered</a></li>
        <li><Link to="/schools">Go to Book</Link></li>
        <li><Link to="/auth/login">Login</Link></li>
        </ul>
        <ul class="nav-links mx-1" style={newDisplay}>
            <li class="nav-active"><a href="#home" className="text-dark"  onClick={doBugger}>Home</a></li>
            <li><a href="#services" className="text-dark" onClick={doBugger} >Sercices Offered</a></li>
            <li><Link to="/schools" className="text-dark" onClick={doBugger} >Go to Book</Link></li>
            <li><Link to="/auth/login" className="text-dark" onClick={doBugger} >Login</Link></li>
        </ul>
        <div class="burger1" onClick={doBugger} >
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    <section className="hero" id='home'>
       <div>
       <h1>Welcome to BookAHostel.com</h1>
        <p>We provide hostel reservation services to srudents who want to be close to their schools.</p>
        <a href='#services' className='cia bg-primary'>Learn More.</a>
        </div>
    </section>
    <section className="services" id='services'>
       <h1>Our Services.</h1>
        <div className='service-cards'>
          <div className='card'>
           <h3>Hostel Booking</h3>
           <p style={{textAlign:'justify'}}>
              We as BookAHostel.com offer hostel booking services to students of a variety of schools registered in our system. The typical schools include:
               <ul style={{textAlign:'left'}}>
                 <li>TVET institutions.</li>
                 <li>Colleges.</li>
                 <li>Universities.</li>
               </ul>
              Courtesy of our service,you need not to conduct a previsit in your school's environ to locate a vacant hostel with a close proximity to the school.
           </p>
           <p style={{textAlign:'justify'}}>All you need to do is,<sup>1</sup>give us your school then <sup>2</sup>get a list of hostels close to your school,<sup>3</sup>select a hostel of your choice,<sup>4</sup>pay the deposit vial Lipa-Na-MPesa then finally <sup>5</sup>receive your receipt via your email address.A total of at most five simple steps.Save time and money to locate and secure your room space.</p>
           <Link to='/schools'className='btn bg-primary text-white'>BOOK</Link>
          </div>

        </div>
    </section>
    <Footer />
    </>
  );

}
export default Home;
