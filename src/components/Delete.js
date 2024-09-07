import React from 'react';
import Swal from 'sweetalert2';
import WithReactContent from 'sweetalert2-react-content';

const MySwal=WithReactContent(Swal);
function Delete(){
  const ShowAlert=()=>{
    MySwal.fire({
      title:'Are you sure?',
      text:"You won't be able to revert this!",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'d33',
      confirmButtonText:'Yes,delete it!',
    }).then((result)=>{
      if(result.isConfirmed){
        MySwal.fire(
          'Deleted','your file has been successfully deleted','success'
        );
      }
    });
  };
  return(
    <>
     <button onClick={ShowAlert}>Show Alert</button>
    </>
  )

}
export default Delete;
