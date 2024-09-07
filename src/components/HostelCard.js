import React from 'react';
import {Link} from 'react-router-dom';

function HostelCard({name,imageURL,rent,deposit,distance,id}) {
         const route='/description';
         let imagePath=imageURL;
         //{require('../img/c.jpg')}
  return(
        <>
         <div className="col-sm col-lg-4 text-dark">
         <Link to={route} style={{texDecoration:'none'}}>
          <h6><strong className="text-dark">{name}</strong></h6>

          <img src={imageURL}  height={350} width={350} className="mx-auto d-block mb-1 mt-2"/>
          <span className="mx-1 text-dark">
          <i className="p-1">Rent,{rent}</i>
          <i className="p-1">Deposit,{deposit}</i>
          <i className="p-1">{distance} Km from school</i>
          </span>
          </Link>
          <div className="horizontal-line"></div>
         </div>
        </>
  )
}


export default HostelCard;
