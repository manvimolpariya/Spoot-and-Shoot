import React, { useEffect, useState } from 'react'
import './adminupdatereport.css'
 import { getReport1 , deleteReport1} from '../../api/internal';
import { useNavigate, useParams } from 'react-router-dom';
const AdminMissingReportUpdate = () => {
  const params = useParams();
  const report = params.id;
   const navigate = useNavigate();
  //  console.log(report)
  const [reports, setReport] = useState('');

  const deleteFunction = async() =>{
    const response = await deleteReport1(reports._id);
    if( response.status === 200){
      navigate('/Enquiry');
    }
}
useEffect(()=>{
  const handleGetReport = async () =>{
   const  response = await getReport1(report);
     if(response.status === 200){
      console.log(response)
     setReport(response.data.findUser[0]);
    }
  }

  handleGetReport();
},[])
  return (
    <div className='adminReportUpdate'>
        <h1>Details</h1>
      <div className='adminReportUpdImg'>
       <img src={`http://localhost:5000/temp/${reports.missing_image}`} alt="" />
       <div className='btndiv'>
        <button className='btns' onClick={()=>navigate(`/AdminMissingReport/update-image/${reports._id}`)}>update</button>
        <button className='btns1' onClick={deleteFunction}>delete</button>
       </div>
      </div>
        <div className='adminReportUpdDet'>
           <div className='adminReportUpdDetdiv'>
               <h1>{reports.person_name}</h1>
               <p>Gardian name :<span> {reports.gaurdian_name}</span></p>
               <p>date of missing :<span> {reports.missing_date} </span></p>
               <p>age: <span> {reports.age} </span></p>
        <p>religion: <span> {reports.religion} </span></p>
        <p>gender: <span> {reports.gender} </span></p>
        <p>adhar/passport/pan: <span> {reports.IdProof} </span></p>
        <p>missing location: <span> {reports.missing_location}</span></p>
        <p>gaurdian contact: <span> {reports.contact} </span></p>
        <p>status : <span> {reports.missing_status}</span></p>
        <p>report Timing: <span> {new Date(reports.createdAt).toDateString()}</span></p> 
           </div>
        </div>
    </div>
  )
}

export default AdminMissingReportUpdate
