import React from 'react';
import {Pie,Bar} from 'react-chartjs-2';
import {Chart as CurrentGrossRevenue,Chart as TimeBook ,ArcElement,Tooltip,Legend,Title} from 'chart.js';
import {Chart as BarNetRevenue,BarElement,LinearScale,CategoryScale} from 'chart.js';

CurrentGrossRevenue.register(ArcElement,Tooltip,Legend,Title);
BarNetRevenue.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
function FinancialsCharts() {
  const date=new Date();
  const barData={
    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets:[
      {
        label:'Amount in KSH',
        data:[12000,190000,100000,50000,25000,31000,120000,190000,200000,50000,230000,32000],
        backgroundColor:[
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,86,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,86,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
        ],
        borderColor:[
          'rgba(255,99,132,1)',
          'rgba(54,162,235,1)',
          'rgba(255,206,86,1)',
          'rgba(75,192,192,1)',
          'rgba(153,102,255,1)',
          'rgba(255,159,64,1)',
          'rgba(255,99,132,1)',
          'rgba(54,162,235,1)',
          'rgba(255,206,86,1)',
          'rgba(75,192,192,1)',
          'rgba(153,102,255,1)',
          'rgba(255,159,64,1)',
        ],
        borderWidth:1
      },
    ],
  };
  const options={
    responsive:true,
    maintainAspectRatio:false,
    scales:{
      y:{
        beginAtZero:true,
      },
    },
  };
  const data={
    labels:['Approved','In Waiting'],
    datasets:[
      {
        label:'Amount in KSH',
        data:[120000,19000],
        backgroundColor:[
          'rgba(54,255,235,0.6)',

          'rgba(255,99,132,0.6)',
        ],
        borderColor:[
          'rgba(54,255,235,1)',

          'rgba(255,99,132,1)',
        ],
        borderWidth:1,
      },
    ],
  };
  return(
    <>
    <div className="row border-dark ">
     <div className="col-lg-4 col-xs-6  col-sm-4 text-center mb-3" >
        <div className='card'>
          <div className='card-header bg-primary text-white text-capitalize'>
              <em>Current Revenue Report.</em>

          </div>
          <div className='form-group p-1'>
            <select className='form-control'>
              <option id='barYear' defaultValue={date.getFullYear()} >{date.getFullYear()}</option>
            </select>
          </div>
          <div className="card-body">
             <Pie data={data} width={150} height={150} />
          </div>
        </div>
     </div>
     <div className="col-lg-6 col-xs-6  col-sm-4 mb-3" >
        <div className='card' >
          <div className='card-header bg-primary text-white text-capitalize'>
              <div className='text-center'><em>Net Earnings By Month.</em></div>

          </div>
          <div className='form-group p-3'>
            <select className='form-control mt-2'>
              <option id='barYear' defaultValue={date.getFullYear()} >{date.getFullYear()}</option>
            </select>
          </div>

          <div className="card-body p-1">
             <Bar data={barData} options={options}  width={220} height={305} />
          </div>
        </div>
     </div>
     </div>
    </>
  )

}

export default FinancialsCharts;
