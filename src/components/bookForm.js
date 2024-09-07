import React,{useState} from 'react';
import Processing from'../components/processing';
function BookForm() {
  const profile={roomId:"A",deposit:5000,rentPrice:15000,hostelName:"Acorn"}
  const [data,setData]=useState({roomId:profile.roomId,phoneNumber:'',email:'',report:'',evacuate:''});
  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const date=new Date();
  const year=date.getFullYear();
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const exactDate=date.getDate();
  const month=months[date.getMonth()];
  const after=`${year}-${month}-${exactDate}`;
  const handleProcessing= ()=>{
    setIsProcessing(!isProcessing);
    document.getElementById('popup').style.display="none";

  }

  const handleClick = () => {
     setIsVisible(!isVisible);
       document.getElementById('popup').style.display="none";
  };
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{
    console.log(data);
  }
  return(

    <>
    <div className="popup " id="popup">
        <div className="popup-content bg-white rounded border-dark">

                <div className="d-flex justify-content-center text-black">
                    Complete the Payment Process
                </div>
                <br/>

            <ul className="list-group">
            <li className="list-group-item list-group-item-action">
            <input type="text"  disabled  className="form-control mr-sm-2 text-center bg-white text-lg text-primary" value={"Acorn Hostels"+profile.hostelName}/>

                <div className="form-inline">
                 <div className="row">
                 <input type="text"  disabled  className="form-control mr-sm-2 mt-1 bg-info text-white text-center" value={"Room Booked:"+profile.roomId}/>
                 <input type="text"  disabled  className="form-control mt-2 bg-info text-white text-center" value={"Rent: KSH "+profile.rentPrice}/>
                 <input type="text"  disabled  className="form-control mt-2 bg-info text-white text-center" value={"Deposit: KSH "+profile.deposit}/>
                 </div>
                </div>
              </li>
              <li className="list-group-item list-group-item-action">
              <div className="form-group">
              <label>When are you planning to</label>
               <div className="row mt-0">
               <div className="col-6">
              <label htmlFor="email" className="text-dark">Report:*</label>
              <input type="date" name="report" className="form-control border-dark" min={after} onChange={handleChange} />
               </div>
               <div className="col-6">
              <label htmlFor="email" className="text-dark">Evacuate:*</label>
              <input type="date" name="evacuate"  className="form-control border-dark" min={after} onChange={handleChange} />
               </div>
               </div>
              </div>
              </li>
                <li className="list-group-item list-group-item-action">
                <div className="form-group">
                <label htmlFor="email" className="text-dark">Email Address:*</label>
                <input type="email" name="email" placeholder='To download the receipt via a link' onChange={handleChange}  className="form-control border-dark"/>
                </div>
                </li>
                <li className="list-group-item list-group-item-action">
                <label htmlFor="phonenumber" className="text-dark">Phone Number:*</label>

                <div className="input-group">
                <div className="input-group-prepend">
                      <span className="input-group-text bg-primary text-white" id="prefix">+254</span>
                 </div>
                <input type="number" name="phoneNumber" placeholder="For M-Pesa STK Push" onChange={handleChange} className="form-control border-dark"/>
                </div>
                </li>
                <div className="horizontal-dot-line"></div>
                <li className="list-group-item list-group-item-action">

                <div className="row">
                <button className="btn btn-danger col-4" onClick={handleSubmit}>CANCEL
                </button>

                <div className="col-4 "></div>
                <button className="btn btn-success col-4" onClick={handleProcessing}>PAY</button>
                </div>
                </li>
            </ul>
        </div>
    </div>
    {isProcessing && <Processing />}
    </>

  )

}
export default BookForm;
