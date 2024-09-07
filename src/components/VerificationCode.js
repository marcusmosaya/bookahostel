import React,{useState,useRef} from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
function VerificationCode(){
  const [values,setValues]=useState(['','','','']);
  const [data,setData]=useState('nmnm');
  const inputRefs=useRef([]);

  const handleChange=(e,index)=>{
    const {value}=e.target;
    if(value.length > 1) return;
    const newValues=[...values];
    newValues[index]=value;
    setValues(newValues);

    //move focus to next input
    if(value && index<3){
      inputRefs.current[index+1].focus();
    }
  };
  const hanleKeyDown=(e,index)=>{
    if(e.key ==='Backspace' && !values[index] && index>0){
      inputRefs.current[index-1].focus();
    }
  };
  const handleVerifyClick=()=>{
    setData(values.join(""));
    alert(data);
  }
  const date=new Date();


  return(

    <>
    <Navbar />


    <div className="container" style={{position:'absolute',top:50}} >
      <div className="text-center ">
        <h5 className="mt-2 text-center text-success">A verification code has been sent to your email address,it expires by:</h5>
          <em className="mt-2 text-center text-success"> {`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}, ${date.getHours()}:${date.getMinutes()}`}</em>
      </div>
     <div className='verification-code'>
     <div className='verification-code-container'>
        {values.map((value,index)=>

          (
            <input type='text' key={index} className="input text-center"maxLength={1} value={value} onChange={(e)=>handleChange(e,index)} onKeyDown={(e)=>hanleKeyDown(e,index)} ref={(el)=>(inputRefs.current[index]=el)}/>
          )
        )
        }

      </div>
     </div>
     <div className="button-container">
        <button onClick={handleVerifyClick}> Verify</button>
     </div>
      <Footer />
     </div>

    </>
  )

}
export default VerificationCode;
