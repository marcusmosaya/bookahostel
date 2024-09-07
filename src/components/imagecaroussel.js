import React from 'react';
function ImageCaroussel({imageURL}) {
  return(
    <div className="imagecarousselContainer">

    {imageURL.map(imagePath=>(  <img src={imagePath} />))}

    </div>
  )

}
export default ImageCaroussel;
