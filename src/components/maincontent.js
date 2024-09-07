import React from 'react';
import '../maincontent.css';
function MainContent({children}){
  return(
    <div className="container">
     {children}
    </div>
  );
}
export default MainContent;
