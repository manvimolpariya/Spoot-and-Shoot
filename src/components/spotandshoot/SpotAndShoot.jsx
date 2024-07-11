import React, { useEffect, useState } from 'react'
import { getAllDetails } from '../../api/internal'
import './spotandshoot.css'
import lost from '/lost.png'
import found from '/found.png'
const SpotAndShoot = () => {
  const [report, setReport] = useState([]);
  

  useEffect(()=>{
    const getDetails = async() =>{
      const  response =await getAllDetails();
     if(response.status === 201){
      setReport(response.data.getperson);
      
     }
    }

    getDetails();
  },[]);

  return (
   
    <section className='allReports'>
      <div className='enuiry-container1'>
     
    {
      report.map((data) => (
        <div key={data._id}  className='report-present1'> 
         <div className='missing-image-handle'>
          <img className='lost-image' src={(data.missing_status === 'missing')? lost : found} alt="" />
          <img className='personImage' src={`http://localhost:5000/temp/${data.missing_image}`} alt="" />
          <h4>{data.person_name}</h4>
          <p><span>gaurdian name: </span>{data.gaurdian_name}</p>
          <p><span>date of missing: </span>{data.missing_date}</p>
          <p><span>age: </span>{data.age}</p>
          <p><span>religion: </span>{data.religion[0]}</p>
          <p><span>gender: </span>{data.gender[0]}</p>
          <p><span>adhar/passport/pan: </span>{data.IdProof}</p>
          <p id={(data.missing_status === 'missing')? "redcolor" : "greencolor"}><span>missing status:</span>{data.missing_status}</p>
          <p><span>missing location: </span>{data.missing_location}</p>
          <p><span>gaurdian contact: </span>{data.contact}</p>
          <p><span>report Timing: </span>{new Date(data.createdAt).toDateString()}</p>
         </div>
        </div>
        
      ))
    }
     </div>
    </section>
  )
}

export default SpotAndShoot
