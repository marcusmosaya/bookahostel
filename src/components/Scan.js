import React,{useState,useEffect} from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import {Html5Qrcode} from 'html5-qrcode';
function Scan(){
  const [scanning,setScanning]=useState(false);
  const [cameraId,setCameraId]=useState(null);
  const [html5Qrcode,setHtml5QrCode]=useState(null);

  useEffect(()=>{
    const html5QrcodeInstance=new Html5Qrcode('reader');//initializing the QR code scanner
    setHtml5QrCode(html5QrcodeInstance);

    //Fetch available cameras
    Html5Qrcode.getCameras().then(cameras=>{
      alert('lllll');

      if(cameras && cameras.length > 0){
        setCameraId(cameras[0].id);
        alert(cameras[0].id);
      }
    }).catch(err=>{
      console.error("Error Fetching cameras: ",err);
    });

    return()=>{
      if(html5QrcodeInstance){
        html5QrcodeInstance.stop().then(()=>{
          html5QrcodeInstance.clear();
        });
      }
    };
  },[]);
  const startScanning=()=>{
    if(cameraId && html5Qrcode){
      html5Qrcode.start(
        {facingMode:"environment"},//environment facing cameras
        {fps:10,//scanning frequency
          qrbox:{width:250,height:250}//set scanning box
        },
        (decodedText)=>{
          alert(`QR Code Text ${decodedText}`);
          stopScanning();//stop scanning optional
        },(errorMessage)=>{
          console.log(`QR Code Scan Error: ${errorMessage}`);
        }
      ).then(()=>{
        setScanning(true);
      }).catch(err=>{
        console.error(err);
      });
    }
  };

 const stopScanning=()=>{
   if(html5Qrcode){
     html5Qrcode.stop().then(()=>{
       setScanning(false);
     }).catch(err=>{
       console.error(err);
     });
   }
 };

  return(
    <>
    <Navbar />
     <div className="container">
      <div id="reader" style={{width:"300px",height:"300px",marginBottom:"20px"}}>

      </div>
      <button onClick={scanning?stopScanning:startScanning}>
      {scanning?"Stop scanning":"Start scanning"}
      </button>
     </div>
    <Footer />
    </>
  )
}
export default Scan;
