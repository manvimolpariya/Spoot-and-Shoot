import React, { useEffect, useState } from 'react'
import { getReport , deleteReport} from '../../api/internal';
import { useNavigate, useParams } from 'react-router-dom';
import './missingDetails.css'
const MissingDetail = () => {
 const params = useParams();
 const report = params.id;
  const navigate = useNavigate();
//  console.log(report)
 const [reports, setReport] = useState('');
const deleteFunction = async() =>{
    const response = await deleteReport(reports._id);
    if( response.status === 200){
      navigate('/adminpage');
    }
}
  useEffect(()=>{
    const handleGetReport = async () =>{
     const  response = await getReport(report);
       if(response.status === 200){
        console.log(response)
       setReport(response.data.findUser[0]);
      }
    }

    handleGetReport();
  },[])
  return (
   
    <div className='getdetailsreportforedit'>
      <div className='edit-content'>
      <div key={reports._id} > 
       <div className='edit-content-div'>
        <img  src={`http://localhost:5000/temp/${reports.missing_image}`} alt="" />
        <h4>{reports.person_name}</h4>
        <p><span>gaurdian name: </span>{reports.gaurdian_name}</p>
        <p><span>date of missing: </span>{reports.missing_date}</p>
        <p><span>age: </span>{reports.age}</p>
        <p><span>religion: </span>{reports.religion}</p>
        <p><span>gender: </span>{reports.gender}</p>
        <p><span>adhar/passport/pan: </span>{reports.IdProof}</p>
        <p><span>missing location: </span>{reports.missing_location}</p>
        <p><span>gaurdian contact: </span>{reports.contact}</p>
        <p id={(reports.missing_status === 'missing')? "redcolor" : "greencolor"}><span>missing status:</span>{reports.missing_status}</p>
          <p><span>report Timing: </span>{new Date(reports.createdAt).toDateString()}</p>
       </div>
      </div>
      <div>
        <button className='edit-btn' onClick={()=>navigate(`/MissingReport/update-image/${reports._id}`)} >edit</button>
        <button className='delete-btn' onClick={deleteFunction}>delete</button>
       </div>
      </div>
    
   </div>
  
  )
}

export default MissingDetail
