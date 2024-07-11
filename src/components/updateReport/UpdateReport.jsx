import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { getReport } from '../../api/internal';
import { updateDetails, updateImage } from '../../api/internal';
import './updateReport.css'


const UpdateReport = () => {
   const params = useParams();
   const report = params.id;
   const navigate = useNavigate();
   
   //const [reports , setReport] =useState(null);
   const [person_name , setPersonName] =useState(null);
   const [IdProof, setIdProof] =useState(null);
   const [age, setAge] =useState(null);
   const [contact, setContact] =useState(null);
   const [gender , setGender] =useState(null);
   const [gaurdian_name, setGaurdian_name] =useState(null);
   const [missing_date, setMissingDate] = useState(null);
   const [missing_image, setMissingImage] = useState(null);
   const [missing_location, setMissingLocation] = useState(null);
   const [missing_status, setMissingStatus] = useState(null);
   const [religion, setMissingReligion] = useState(null);
   const [selectImage, setPhoto] = useState(null);
   
   const updateReportDetails = async(e) =>{
    e.preventDefault();
    try { 
      if(!selectImage && person_name && contact && IdProof 
        &&age && gender && gaurdian_name && missing_date &&
         missing_location
       && religion && missing_status){
       const  data = {
          person_name, contact, IdProof, age, gender,
          gaurdian_name, missing_date, missing_location,
          religion, missing_status
         };
            const response = await updateDetails(report, data);
            console.log(response);
            if(response.status === 201){
              navigate('/SpotAndShoot')
            }
       }

       if(selectImage){
        setMissingImage(selectImage);

        const  formData = new FormData();
        formData.append('missing_image', missing_image)
       
       const response = await updateImage(report, formData)
       console.log(response);
       if(response.status === 200){
         navigate('/SpotAndShoot')
       }
      }
    }catch(error){
    console.log(error);
    }
   }


   const getPhoto = (e) =>{
    const file = e.target.files[0];

       setMissingImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setPhoto(reader.result);
      
    }
  }
   
   useEffect(()=>{
   
    const handleGetReport = async () =>{
     const  response = await getReport(report);
       if(response.status === 200){
        console.log(response)
        const setImg = `http://localhost:5000/temp/${response.data.findUser[0].missing_image}`
      //  setReport(response.data.findUser[0]);
       setPersonName(response.data.findUser[0].person_name);
       setIdProof(response.data.findUser[0].IdProof);
       setAge(response.data.findUser[0].age);
       setContact(response.data.findUser[0].contact);
       setGender(response.data.findUser[0].gender);
       setGaurdian_name(response.data.findUser[0].gaurdian_name);
       setMissingStatus(response.data.findUser[0].missing_status);
       setMissingDate(response.data.findUser[0].missing_date);
       setMissingLocation(response.data.findUser[0].missing_location);
       setMissingReligion(response.data.findUser[0].religion);
       setMissingImage(setImg);
      
      }
    }

    handleGetReport();
  },[])
  return (
    <div className='update_Report_content_container'>
     {report}
     <div className='update_div'>
     <form encType='multipart/form-data' onSubmit={updateReportDetails}>
      <div className='update_div_row'>
      <input type="text"
       placeholder={person_name}
       onChange={(e)=> setPersonName(e.target.value)}
       />
      <input type="text" 
      placeholder={IdProof}
      onChange={(e)=> setIdProof(e.target.value)}
      />
      </div>
      <div className='update_div_row'>
      <input type="text"
       placeholder={age}
       onChange={(e)=> setAge(e.target.value)}
       />
      <input type="text" 
      placeholder={contact}
      onChange={(e)=> setContact(e.target.value)}
      />
      </div>
      <div className='update_div_row'>
      <input 
      type="text" 
      placeholder={gender}
      onChange={(e)=> setGender(e.target.value)}
      />
      <input type="text"
        onChange={(e)=> setGaurdian_name(e.target.value)} 
      placeholder={gaurdian_name}/>
      </div>
      <div className='update_div_row'>
      <input type='text'
       placeholder={missing_date}
       onChange={(e)=> setMissingDate(e.target.value)}
       />
      <input 
      type='text' 
      placeholder={missing_location}
      onChange={(e)=> setMissingLocation(e.target.value)}
      />
      </div>
      <div className='update_div_row'>
      <input 
      type='text' 
      placeholder={missing_status}
      onChange={(e)=> setMissingStatus(e.target.value)}
      />
      <input type='text' 
      placeholder={religion}
      onChange={(e)=> setMissingReligion(e.target.value)}
      />
      </div>
      <input type="file"
       onChange={getPhoto}
       name='missing_image'
      />
       { selectImage ? 
       <img src={selectImage} alt="" /> :
       <img src={missing_image} alt="" />
      }
     
     <div className='button-handler-div'>
    <button  type='submit' className='update_report_button' >Update</button>    
    </div>
    </form>
    </div>
    </div>
  )
}

export default UpdateReport
