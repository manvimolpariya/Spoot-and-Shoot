import React, { useEffect, useState } from 'react'
import './adminreportcards.css'

import { getAllDetails } from '../../api/internal'
import { useNavigate } from 'react-router-dom';
const AdminReportsCards = () => {

    const [report, setReport] = useState([]);
  const navigate = useNavigate();

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
  
    <div className='adminReportcard1-container'>
       
    {
      report.map((data) => (
        <div key={data._id} onClick={()=>navigate(`/AdminMissingReport/${data._id}`)} className='adminReportcard1'> 
          <img className='personImage' src={`http://localhost:5000/temp/${data.missing_image}`} alt="" />
          <h1>{data.person_name}</h1>
          <p><span>gaurdian name: </span>{data.gaurdian_name}</p>
          <p><span>date of missing: </span>{data.missing_date}</p>
          <p><span>age: </span>{data.age}</p>
          <p><span>gender: </span>{data.gender[0]}</p>
          <p id={(data.missing_status === 'missing')? "redcolor" : "greencolor"}><span>status:</span>{data.missing_status}</p>
          <p><span>missing location: </span>{data.missing_location}</p>
        </div>
        
      ))
    }
   
    </div>
   
  )
}

export default AdminReportsCards
