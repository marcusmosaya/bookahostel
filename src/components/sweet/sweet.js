import React from 'react';
import Swal from 'sweetalert2';
import WithReactContent from 'sweetalert2-react-content';

const MySwal=WithReactContent(Swal);
  const Sweet=({setState})=>{
    MySwal.fire({
      title:'Empty Credential',
      text:"Please fill all the spaces",
      icon:'warning',
      showCancelButton:false,
      confirmButtonColor:'#3085d6',
    }).then((result)=>{
        setTimeout(function () {
           setState(false);
        },5);
    });
  };
export default Sweet;
