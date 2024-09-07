import React from 'react';
import {useNavigate} from 'react-router-dom';
function About(){
  const navigate=useNavigate();
  return(
    <div>
     <h1>About Page</h1>
     <p>This is about page.</p>
     <button onClick={()=>navigate('/')}>Go Home</button>
    </div>
  );

}
export default About;
