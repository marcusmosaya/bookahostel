import React,{useEffect,useState} from 'react';
import Loading from '../components/loading';
import Success from '../components/success';

function Processing(){
  const [data,setData]=useState("Validating,Please wait...");
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
        setData("Validating,Please wait...");

    },3000);
  },[]);
  return(


  <>

               {isLoading?(

                 <div className="popup ">
                 <div className="popup-content bg-white bg-primary">
                  <div className=" justify-content-center text-black">


                              {data}
                              <Loading />


                 </div>

                         </div>
                         </div>):(

                               <Success />


                 )}
                 </>

  )

}
export default Processing;
